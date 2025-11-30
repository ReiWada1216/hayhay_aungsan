/**
 * メンバーデータの定義ファイル
 * チームメンバーの情報を管理
 */
import { Member } from '../types';

// メンバー情報の配列
export const members: Member[] = [
  {
    id: 'm1',
    name: '朝倉 康太',
    role: '代表',
    bio: '難民・移民の教育についての研究。将来は、国連職員になることが目標。',
    imageUrl: '/images/members/kota.jpg'
  },
  {
    id: 'm2',
    name: '三原 静香',
    role: '副代表',
    bio: '国際協力に情熱を持つ。しっかりもので、チームのまとめ役。',
    imageUrl: '/images/members/shizuka.jpg'
  },
  {
    id: 'm3',
    name: '森 優斗',
    role: 'デザイナー/写真家/芸人/音楽家/',
    bio: 'アートセンスと発想力に長けた特攻隊長。様々な顔を持っています。',
    imageUrl: '/images/members/yuto.jpg'
  },
  {
    id: 'm4',
    name: '岸本 杏菜',
    role: '会計/通訳',
    bio: '国内難民についての研究。日本にミャンマー出身のたくさんの友達がいます！愛されキャラ',
    imageUrl: '/images/members/anna.jpg'
  },
  {
    id: 'm5',
    name: '和田 嶺',
    role: 'webエンジニア/バリスタ',
    bio: 'エンジニアとして、Webデザインを担当。コーヒーも淹れられます。',
    imageUrl: '/images/members/rei.jpg'
  }
];