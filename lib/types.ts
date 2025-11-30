/**
 * アプリケーション全体で使用する型定義
 */

/**
 * 活動情報の型定義
 */
export interface Activity {
  id: string;           // 活動の一意識別子
  title: string;        // 活動タイトル
  date: string;         // 活動日時
  category: string;     // 活動カテゴリ（イベント、現地訪問など）
  tag: 'Plan' | 'Past'; // 活動タイプ（予定/過去）
  body: string;         // 活動の説明文
  image: string;        // サムネイル画像のURL
  place?: string;       // 開催場所（オプション）
}

/**
 * 商品情報の型定義
 */
export interface Product {
  id: string;           // 商品の一意識別子
  name: string;         // 商品名
  price: string;        // 価格
  description: string;  // 商品説明
  imageUrl: string;     // 商品画像のURL
  origin: string;       // 産地・製作元
  material?: string;    // 素材（オプション）
}

/**
 * 商品アイテムの型定義（詳細ページ用）
 */
export interface ProductItem {
  id: string;           // アイテムの一意識別子
  number: number;       // index番号
  image: {
    url: string;        // 画像のURL
  };
}

/**
 * メンバー情報の型定義
 */
export interface Member {
  id: string;           // メンバーの一意識別子
  name: string;         // メンバー名
  role: string;         // 役割・役職
  bio: string;          // 自己紹介・経歴
  imageUrl: string;     // プロフィール画像のURL
}