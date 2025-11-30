/**
 * microCMS APIとの連携モジュール
 * 活動データと商品データの取得と管理を行う
 */
import { createClient } from 'microcms-js-sdk';
import { Activity, Product } from './types';

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error('MICROCMS_SERVICE_DOMAIN is required');
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error('MICROCMS_API_KEY is required');
}

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

// microCMSのレスポンス型（実際のAPIフィールドに合わせる）
type MicroCMSActivity = {
  id: string;
  title: string;
  date: string;
  tag: ('Plan' | 'Past')[];  // microCMSでは配列として返される
  category: 'イベント' | '現地訪問';
  body: string;      // descriptionではなくbody
  image?: {          // imageUrlではなくimage
    url: string;
  };
};

export async function getActivities(): Promise<Activity[]> {
  const data = await client.get<{ contents: MicroCMSActivity[] }>({
    endpoint: 'activities',
  });

  return data.contents.map((item) => ({
    id: item.id,
    title: item.title,
    date: item.date,
    tag: Array.isArray(item.tag) ? item.tag[0] : item.tag,  // 配列の場合は最初の要素を使用
    category: item.category,
    body: item.body,
    image: item.image?.url || '',
  }));
}

export async function getActivityById(id: string): Promise<Activity> {
  const data = await client.get<MicroCMSActivity>({
    endpoint: 'activities',
    contentId: id,
  });

  return {
    id: data.id,
    title: data.title,
    date: data.date,
    tag: Array.isArray(data.tag) ? data.tag[0] : data.tag,  // 配列の場合は最初の要素を使用
    category: data.category,
    body: data.body,
    image: data.image?.url || '',
  };
}

/**
 * microCMSから全ての商品データを取得
 * @returns 商品データの配列
 */
export async function getProducts(): Promise<Product[]> {
  try {
    const data = await client.get({
      endpoint: 'products',
      queries: {
        limit: 100,
      },
    });

    return data.contents.map((item: any) => ({
      id: item.id,
      name: item.name,
      price: item.price,
      description: item.description,
      imageUrl: item.image?.url || item.imageUrl || '',
      origin: item.origin,
      material: item.material,
    }));
  } catch (error) {
    console.error('Failed to fetch products from microCMS:', error);
    throw error;
  }
}

/**
 * IDを指定して特定の商品データを取得
 * @param id 商品のID
 * @returns 商品データ
 */
export async function getProductById(id: string): Promise<Product> {
  try {
    const item = await client.get({
      endpoint: 'products',
      contentId: id,
    });

    return {
      id: item.id,
      name: item.name,
      price: item.price,
      description: item.description,
      imageUrl: item.image?.url || item.imageUrl || '',
      origin: item.origin,
      material: item.material,
    };
  } catch (error) {
    console.error(`Failed to fetch product ${id} from microCMS:`, error);
    throw error;
  }
}

/**
 * 商品カテゴリごとのアイテムを取得
 * @param category 商品カテゴリ（pouch, scarf, bag）
 * @returns 商品アイテムの配列
 */
export async function getProductItems(category: 'pouch' | 'scarf' | 'bag') {
  try {
    const endpoint = `shop_${category}`;
    const data = await client.get({
      endpoint,
      queries: {
        limit: 100,
        orders: 'number',
      },
    });

    return data.contents.map((item: any) => ({
      id: item.id,
      number: item.number,
      image: {
        url: item.image?.url || '',
      },
    }));
  } catch (error) {
    console.error(`Failed to fetch ${category} items from microCMS:`, error);
    throw error;
  }
}
