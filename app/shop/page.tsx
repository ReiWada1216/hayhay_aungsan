/**
 * 商品カタログページコンポーネント
 * チャリティ商品の一覧を表示
 * 商品情報と購入フォームへのリンクを提供
 * microCMSから商品データを取得
 */
import React from 'react';
import Link from 'next/link';
import { fetchProducts } from '@/lib/data/products';
import { ExternalLink, Tag, ChevronRight } from 'lucide-react';
import { ProductImage } from '@/components/ProductImage';

// ISR（Incremental Static Regeneration）を有効化 - 60秒ごとに再検証
export const revalidate = 60;

export default async function Shop() {
  // microCMSから商品データを取得
  const products = await fetchProducts();
  
  // 購入申し込み用のInstagramのURL
  const INSTAGRAM_URL = "https://www.instagram.com/hayhay_aungsan/";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-serif font-bold text-earth-800 sm:text-4xl">チャリティ商品</h2>
        <p className="mt-4 text-lg text-stone-600 max-w-2xl mx-auto">
          現地の人々の伝統技術がつまった商品です。<br />
          収益は全額、現地の教育支援や生活向上プロジェクトに活用されます。
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.map((product) => (
          <div key={product.id} className="group bg-white rounded-2xl border border-stone-100 shadow-sm hover:shadow-md transition-all duration-300">
            {/* 画像エリア - クリックで詳細ページへ */}
            <Link href={`/shop/${product.id}`} className="block">
              <div className="aspect-w-4 aspect-h-3 w-full overflow-hidden rounded-t-2xl bg-stone-200 relative h-64 cursor-pointer">
                <ProductImage src={product.imageUrl} alt={product.name} />
                {/* ホバー時のオーバーレイ */}
                <div className="absolute inset-0 bg-transparent group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center z-20 pointer-events-none">
                  <ChevronRight className="h-12 w-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </Link>
            
            <div className="p-6">
              <div className="mb-2">
                 <span className="text-xs font-medium text-nature-700 bg-nature-50 px-2 py-1 rounded">
                   {product.origin}
                 </span>
              </div>
              
              {/* タイトル - クリックで詳細ページへ */}
              <Link href={`/shop/${product.id}`}>
                <h3 className="text-lg font-bold text-stone-800 mb-2 hover:text-earth-600 transition-colors cursor-pointer">
                  {product.name}
                </h3>
              </Link>
    
              <p className="text-sm text-stone-600 mb-4 line-clamp-3 min-h-[3.75rem]">
                {product.description}
              </p>
              
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-stone-100">
                <span className="text-xl font-bold text-earth-800">{product.price}</span>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-earth-700 text-white text-sm font-medium hover:bg-earth-600 transition-colors shadow-sm"
                >
                  購入を申し込む <ExternalLink className="h-3 w-3" />
                </a>
              </div>
              {product.material && (
                <div className="mt-3 flex items-center gap-1 text-xs text-stone-400">
                  <Tag className="h-3 w-3" />
                  {product.material}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-earth-50 rounded-2xl p-8 text-center border border-earth-200">
        <h3 className="text-lg font-bold text-earth-800 mb-2">ご注文について</h3>
        <p className="text-stone-600 text-sm max-w-2xl mx-auto">
          現在はInstagramのDM経由でのご注文のみ承っております。DMにてお問い合わせいただいた後、担当者よりお振込先と発送予定日をご連絡させていただきます。
          在庫状況により、お届けまでお時間をいただく場合がございます。
        </p>
      </div>
    </div>
  );
}
