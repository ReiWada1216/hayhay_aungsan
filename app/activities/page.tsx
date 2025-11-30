/**
 * 活動一覧ページコンポーネント
 * microCMSから活動情報を取得して表示
 * 予定されている活動と過去の活動を分けて表示
 */
import React from 'react';
import Link from 'next/link';
import { fetchActivities } from '@/lib/data/activities';
import { Calendar } from 'lucide-react';

// ISR（Incremental Static Regeneration）を有効化 - 60秒ごとに再検証
export const revalidate = 60;

/**
 * タグに応じた色のクラスを返すヘルパー関数
 * @param tag - 活動タグ
 * @returns Tailwind CSSクラス文字列
 */
function getTagColor(tag: string) {
  switch (tag) {
    case 'Plan': return 'bg-blue-100 text-blue-800 border-blue-200';
    case 'Past': return 'bg-stone-100 text-stone-800 border-stone-200';
    default: return 'bg-gray-100 text-gray-800';
  }
}

/**
 * タグのラベルを返すヘルパー関数
 * @param tag - 活動タグ
 * @returns タグラベル
 */
function getTagLabel(tag: string) {
  const labels: Record<string, string> = {
    'Plan': '予定',
    'Past': '過去',
  };
  return labels[tag] || tag;
}

export default async function Activities() {
  // microCMSから活動データを取得
  const allActivities = await fetchActivities();
  
  // デバッグ: データの中身を確認
  console.log('全活動データ:', allActivities.map(a => ({ id: a.id, title: a.title, tag: a.tag })));
  
  // タグで予定と過去の活動を分ける
  const futureActivities = allActivities.filter(activity => activity.tag === 'Plan');
  const pastActivities = allActivities.filter(activity => activity.tag === 'Past');

  console.log('全活動数:', allActivities.length);
  console.log('予定している活動:', futureActivities.length);
  console.log('過去の活動:', pastActivities.length);
  console.log('各活動のtagの値:', allActivities.map(a => `${a.title}: "${a.tag}"`));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-serif font-bold text-earth-800 sm:text-4xl">活動レポート</h2>
        <p className="mt-4 text-lg text-stone-600">
          私たちの歩みと、これからの予定をご紹介します。
        </p>
      </div>

      {/* 予定している活動 */}
      {futureActivities.length > 0 && (
        <div className="mb-16">
          <h3 className="text-2xl font-serif font-bold text-earth-800 mb-6">予定している活動</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {futureActivities.map((activity) => (
              <Link key={activity.id} href={`/activities/${activity.id}`} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-stone-100 flex flex-col">
                {/* ここでカードのレイアウトを変更 */}
                <div className="relative h-64 overflow-hidden">
                  {activity.image && (
                    <img
                      src={activity.image}
                      alt={activity.title}
                      className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                    />
                  )}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-earth-800 border border-earth-200">
                      {activity.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-stone-800 mb-2 leading-tight">
                    {activity.title}
                  </h3>
                  <div className="flex items-center text-sm text-stone-500">
                    <Calendar className="h-4 w-4 mr-1" />
                    {activity.date}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* 過去の活動 */}
      {pastActivities.length > 0 && (
        <div>
          <h3 className="text-2xl font-serif font-bold text-earth-800 mb-6">過去の活動</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {pastActivities.map((activity) => (
              <Link key={activity.id} href={`/activities/${activity.id}`} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-stone-100 flex flex-col">
                <div className="relative h-64 overflow-hidden">
                  {activity.image && (
                    <img
                      src={activity.image}
                      alt={activity.title}
                      className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                    />
                  )}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-earth-800 border border-earth-200">
                      {activity.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-stone-800 mb-2 leading-tight">
                    {activity.title}
                  </h3>
                  <div className="flex items-center text-sm text-stone-500">
                    <Calendar className="h-4 w-4 mr-1" />
                    {activity.date}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
