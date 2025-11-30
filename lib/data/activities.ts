/**
 * 活動データの定義ファイル
 * 過去の活動と予定されている活動の情報を管理
 * microCMSから取得、このファイルはフォールバック用のデータ
 */
import { Activity } from '../types';
import { getActivities } from '../microcms';

/**
 * microCMSから活動データを取得
 * エラー時はフォールバックデータを返す
 */
export async function fetchActivities(): Promise<Activity[]> {
  try {
    return await getActivities();
  } catch (error) {
    console.warn('microCMSからの取得に失敗しました。フォールバックデータを使用します。', error);
    return activitiesFallback;
  }
}

// フォールバック用の活動データ（時系列で並べられている）
const activitiesFallback: Activity[] = [
  {
    id: '1',
    title: 'ここに生きる、ミャンマー難民と山岳民族の今日～大学生の人生を変えた、9日間の記録～',
    date: '2026.01.26 - 2026.01.30',
    tag: 'Plan',
    category: 'イベント',
    body: '兵庫国際交流協会 ひょうご国際プラザ交流ギャラリーにて写真展を開催します。私たちが現地で出会った人々の暮らしや笑顔、9日間の体験を通じて感じたことを写真と共にお伝えします。',
    image: '/images/activities/activities_photo.jpg'
  },
  {
    id: '5',
    title: 'Late Cafe～アカ族コーヒーと国際交流～',
    date: '未定',
    tag: 'Plan',
    category: 'イベント',
    body: '金閣寺近くのGOGO COFFEEにて、アカ族のコーヒーを楽しみながら国際交流を深めるイベントを開催予定です。現地の文化や人々の暮らしについて、コーヒーを通じて学び、語り合う場を提供します。',
    image: '/images/activities/activities_coffee.jpeg'
  },
  {
    id: '4',
    title: '立命館大学 BKC学園祭　フリーマーケット販売',
    date: '2025.11.16',
    tag: 'Past',
    category: 'イベント',
    body: 'SAWの方々によって作成されたポーチやトートバッグなどを学祭のフリマで販売しました。全て、子供たちの奨学金として寄付されます。',
    image: '/images/activities/activities_school.jpg'
  },
  {
    id: '3',
    title: 'タイ北西部・アカ族の村落滞在',
    date: '2025.09.12 - 2025.09.13',
    tag: 'Past',
    category: '現地訪問',
    body: 'タイで少数民族の教育や図書館運営に携わっている堀内佳美さんの協力により、アカ族の教育施設に訪問することができました。アカ語だけでなく、タイ語や英語の教育も行われていました。コーヒーファームもありました。',
    image: '/images/activities/activities_aka.jpg'
  },
  {
    id: '2',
    title: 'ミャンマー難民教育施設（SAW）訪問',
    date: '2025.09.09 - 2025.09.10',
    tag: 'Past',
    category: '現地訪問',
    body: 'タイ政府公認組織Social Actions for Women and Children(SAW)という難民の教育・職業支援を行なっている団体を訪問しました。場所：タイ西部/メソト',
    image: '/images/activities/activities_saw.jpg'
  }
];