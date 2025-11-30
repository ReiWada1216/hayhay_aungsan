/**
 * 活動詳細ページコンポーネント
 * 個別の活動の詳細情報をmicroCMSから取得して表示
 * ダイナミックルーティングを使用
 */
import { notFound } from 'next/navigation';
import { getActivityById } from '@/lib/microcms';
import { fetchActivities } from '@/lib/data/activities';
import { formatDate } from '@/lib/utils/dateFormatter';

// ISR（Incremental Static Regeneration）を有効化 - 60秒ごとに再検証
export const revalidate = 60;

/**
 * すべての活動ページの静的パスを生成
 * Next.jsのStatic Site Generation（SSG）で使用
 * @returns 活動IDの配列
 */
export async function generateStaticParams() {
  const activities = await fetchActivities();
  
  return activities.map((activity) => ({
    id: activity.id,
  }));
}

/**
 * 活動詳細ページコンポーネント
 * @param params - ルートパラメータ（活動ID）
 */
export default async function ActivityDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  
  try {
    const activity = await getActivityById(id);

    return (
      <div className="min-h-screen bg-earth-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-block px-3 py-1 bg-nature-100 text-nature-700 rounded-full text-sm font-medium">
                {activity.tag}
              </span>
              <span className="text-earth-600 text-sm">
                {formatDate(activity.date)}
              </span>
              {activity.place && (
                <span className="text-earth-600 text-sm flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {activity.place}
                </span>
              )}
            </div>
            
            <h1 className="text-4xl font-bold text-earth-900 mb-4 font-serif">
              {activity.title}
            </h1>
          </div>

          {/* Featured Image */}
          {activity.image && (
            <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
              <img
                src={activity.image}
                alt={activity.title}
                className="w-full h-auto"
              />
            </div>
          )}

          {/* Content */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <div 
              className="prose prose-earth max-w-none"
              dangerouslySetInnerHTML={{ __html: activity.body }}
            />
          </div>

          {/* Back Button */}
          <div className="mt-8">
            <a
              href="/activities"
              className="inline-flex items-center text-nature-600 hover:text-nature-700 font-medium transition-colors"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              活動一覧に戻る
            </a>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    notFound();
  }
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  
  try {
    const activity = await getActivityById(id);
    
    return {
      title: `${activity.title} | HayHay AungSan`,
      description: activity.body || activity.title,
    };
  } catch (error) {
    return {
      title: 'Activity Not Found',
    };
  }
}
