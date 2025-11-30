/**
 * ホームページコンポーネント
 * トップページのメインコンテンツを表示
 * ヒーローセクションと主要な機能紹介を含む
 */
import React from 'react';
import Link from 'next/link';
import { ArrowRight, HeartHandshake, Globe2, ShoppingBag } from 'lucide-react';

export default function Home() {
  return (
    <div className="space-y-20 pb-20">
      {/* ヒーローセクション - メインビジュアルとキャッチコピー */}
      <div className="relative bg-earth-800 py-24 sm:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/images/home/Home.jpg"
            alt="Background"
            className="h-full w-full object-cover object-[center_40%] opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-serif font-bold tracking-tight text-white sm:text-6xl mb-6">
            「難民」という言葉の向こうに守りたい<br />
            一人ひとりの「笑顔」がある
          </h1>
          <p className="mt-6 text-lg leading-8 text-earth-100 max-w-2xl mx-auto">
            ニュースで耳にする「難民」という言葉。その背景には、悔しくも故郷を離れなくてはならなかった一人一人の物語があります。
            私たちは、その人々が再び笑顔で暮らせる日を願い、日本での布教活動や支援活動を行っています。
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/activities"
              className="rounded-full bg-nature-600 px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-nature-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nature-600 transition-all"
            >
              活動を見る
            </Link>
            <Link href="/shop" className="text-sm font-semibold leading-6 text-white flex items-center gap-1 hover:text-earth-200">
              商品をさがす <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* 特徴セクション - 3つの主要な活動内容を紹介 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm border border-stone-100">
            <div className="p-3 bg-earth-100 rounded-full mb-4">
              <Globe2 className="h-8 w-8 text-earth-700" />
            </div>
            <h3 className="text-xl font-serif font-bold text-stone-800 mb-2">現地訪問</h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              現地を訪れ、実際の暮らしを学びます。
            </p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm border border-stone-100">
            <div className="p-3 bg-nature-100 rounded-full mb-4">
              <ShoppingBag className="h-8 w-8 text-nature-700" />
            </div>
            <h3 className="text-xl font-serif font-bold text-stone-800 mb-2">支援活動</h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              現地で作られたものをフェアトレードとして販売し、寄付に繋げます。
            </p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm border border-stone-100">
            <div className="p-3 bg-amber-100 rounded-full mb-4">
              <HeartHandshake className="h-8 w-8 text-amber-700" />
            </div>
            <h3 className="text-xl font-serif font-bold text-stone-800 mb-2">発信活動</h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              写真展や学祭などに参加し、発信・啓蒙を行います。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
