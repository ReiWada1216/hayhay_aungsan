/**
 * 商品データの定義ファイル
 * チャリティ商品の情報を管理
 * 商品一覧は埋め込みデータ、詳細ページはmicroCMSから取得
 */
import { Product } from '../types';

/**
 * 商品データを取得（埋め込みデータを使用）
 * 各商品カードをクリックするとmicroCMSの詳細データを表示
 */
export async function fetchProducts(): Promise<Product[]> {
  return productsData;
}

// 商品情報の配列（埋め込み）
// クリックすると各カテゴリのmicroCMSデータが表示される
const productsData: Product[] = [
  {
    id: 'pouch',
    name: '刺繍入りマルチポーチ',
    price: '¥800',
    description: 'ミャンマー難民の女性・子供たちが一針一針丁寧に刺繍を施しました。パスポート入れやペンケースとして使いやすいサイズです。',
    origin: 'タイ西部/メソト/SAW',
    imageUrl: '/images/products/products_pouch.jpg'
  },
  {
    id: 'bag',
    name: 'トートバッグ',
    price: '¥2,500',
    description: '丈夫な生地に花柄模様の刺繍がアクセント。A4サイズがすっぽり入る大きさで、通学や買い物に便利です。',
    origin: 'タイ西部/メソト/SAW',
    imageUrl: '/images/products/products_bag.jpg'
  },
  {
    id: 'scarf',
    name: 'スカーフ',
    price: '¥2,000',
    description: '春や秋の肌寒い時期におすすめ。スタイリッシュなスタイルに合います。',
    origin: 'タイ西部/メソト/SAW',
    imageUrl: '/images/products/products_scarf.jpg'
  }
];