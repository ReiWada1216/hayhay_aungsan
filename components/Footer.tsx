/**
 * フッターコンポーネント
 * サイト全体のフッターセクションを管理
 * ブランド情報、メニューリンク、SNSリンクなどを表示
 */
import React from 'react';
import Link from 'next/link';
import { Instagram, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-earth-800 text-earth-100 py-12 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Column 1: ブランド情報セクション */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src="/images/home/logo.jpg" alt="HayHay AungSan" className="h-10 w-10 rounded-full object-cover" />
              <span className="font-serif font-bold text-xl tracking-wide">HayHay AungSan</span>
            </div>
            <p className="text-sm text-earth-200 leading-relaxed">
              国境を越えて、人と人をつなぐ。<br />
              小さな支援が、大きな笑顔に変わることを信じて。
            </p>
          </div>

          {/* Column 2: メニューリンクセクション */}
          <div>
            <h3 className="font-bold text-earth-50 mb-4 uppercase text-sm tracking-wider">Menu</h3>
            <ul className="space-y-2 text-sm text-earth-200">
              <li><Link href="/" className="hover:text-white transition-colors">ホーム</Link></li>
              <li><Link href="/activities" className="hover:text-white transition-colors">活動紹介</Link></li>
              <li><Link href="/shop" className="hover:text-white transition-colors">チャリティ商品</Link></li>
              <li><Link href="/members" className="hover:text-white transition-colors">メンバー</Link></li>
            </ul>
          </div>

          {/* Column 3: 連絡先・SNSセクション */}
          <div>
            <h3 className="font-bold text-earth-50 mb-4 uppercase text-sm tracking-wider">Contact</h3>
            <div className="flex space-x-4 mb-4">
              <a href="https://www.instagram.com/hayhay_aungsan?igsh=MW5lNHZ4dzc4OTVibQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-earth-300 hover:text-white transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="mailto:ir0417xe@ed.ritsumei.ac.jp" className="text-earth-300 hover:text-white transition-colors"><Mail className="h-5 w-5" /></a>
            </div>
            <p className="text-xs text-earth-400">
              &copy; {new Date().getFullYear()} HayHay AungSan. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
