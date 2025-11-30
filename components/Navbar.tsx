/**
 * ナビゲーションバーコンポーネント
 * サイト全体のヘッダーナビゲーションを管理
 * レスポンシブデザインに対応し、モバイル表示ではハンバーガーメニューを表示
 */
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  // モバイルメニューの開閉状態を管理
  const [isOpen, setIsOpen] = useState(false);
  // 現在のパスを取得
  const pathname = usePathname();

  // ナビゲーションメニュー項目の定義
  const navItems = [
    { path: '/', label: 'ホーム' },
    { path: '/activities', label: '活動紹介' },
    { path: '/shop', label: '商品カタログ' },
    { path: '/members', label: 'メンバー' },
  ];

  // 現在のパスに応じてアクティブなリンクのスタイルを返す関数
  const isActive = (path: string) => {
    return pathname === path ? 'text-nature-700 font-bold' : 'text-stone-600 hover:text-nature-600';
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-stone-200 shadow-sm">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
              <img src="/images/home/logo.jpg" alt="HayHay AungSan" className="h-14 w-14 rounded-full object-cover" />
              <span className="font-serif font-bold text-xl text-earth-800 tracking-wide">HayHay AungSan</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`transition-colors duration-200 text-sm tracking-wider ${isActive(item.path)}`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-stone-600 hover:text-stone-900 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-stone-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  pathname === item.path
                    ? 'bg-nature-50 text-nature-800'
                    : 'text-stone-600 hover:bg-stone-50 hover:text-stone-900'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
