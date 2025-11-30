/**
 * 商品詳細ページコンポーネント
 * 各カテゴリ（ポーチ、スカーフ、バッグ）の商品アイテムを表示
 * microCMSから画像とindex番号を取得して1行3画像で表示
 */
import { notFound } from 'next/navigation';
import { getProductItems } from '@/lib/microcms';
import { ProductItem } from '@/lib/types';
import Image from 'next/image';

// ISR（Incremental Static Regeneration）を有効化 - 60秒ごとに再検証
export const revalidate = 60;

/**
 * すべての商品カテゴリページの静的パスを生成
 */
export async function generateStaticParams() {
  return [
    { id: 'pouch' },
    { id: 'scarf' },
    { id: 'bag' },
  ];
}

/**
 * カテゴリ名を日本語に変換
 */
function getCategoryName(id: string): string {
  const names: { [key: string]: string } = {
    pouch: 'ポーチ',
    scarf: 'スカーフ',
    bag: 'バッグ',
  };
  return names[id] || id;
}

/**
 * 商品詳細ページコンポーネント
 */
export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  // 有効なカテゴリかチェック
  if (!['pouch', 'scarf', 'bag'].includes(id)) {
    notFound();
  }

  try {
    const items = await getProductItems(id as 'pouch' | 'scarf' | 'bag');
    const categoryName = getCategoryName(id);

    return (
      <div className="min-h-screen bg-earth-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-earth-900 mb-4 font-serif text-center">
              {categoryName}コレクション
            </h1>
            <p className="text-center text-stone-600 max-w-2xl mx-auto">
              現地の方々が心を込めて作った{categoryName}の一覧です
            </p>
          </div>

          {/* Items Grid - 1行3画像 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {items.map((item: ProductItem) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                {/* 画像 */}
                <div className="aspect-square relative bg-stone-200">
                  {item.image.url ? (
                    <Image
                      src={item.image.url}
                      alt={`${categoryName} No.${item.number}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-stone-400">
                      画像なし
                    </div>
                  )}
                </div>

                {/* Index番号 */}
                <div className="p-4 text-center">
                  <p className="text-lg font-semibold text-earth-800">
                    No. {item.number}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* データが空の場合 */}
          {items.length === 0 && (
            <div className="text-center py-12">
              <p className="text-stone-600">現在、表示できる商品がありません。</p>
            </div>
          )}

          {/* Back Button */}
          <div className="mt-8 text-center">
            <a
              href="/shop"
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
              商品一覧に戻る
            </a>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error(`Failed to load ${id} items:`, error);
    return (
      <div className="min-h-screen bg-earth-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl font-bold text-earth-900 mb-4">
            データの取得に失敗しました
          </h1>
          <p className="text-stone-600 mb-8">
            申し訳ございません。商品情報を読み込めませんでした。
          </p>
          <a
            href="/shop"
            className="inline-flex items-center text-nature-600 hover:text-nature-700 font-medium"
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
            商品一覧に戻る
          </a>
        </div>
      </div>
    );
  }
}
