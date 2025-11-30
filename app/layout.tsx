/**
 * ルートレイアウトコンポーネント
 * アプリケーション全体の共通レイアウトを定義
 * フォント設定、メタデータ、ナビゲーション、フッターを含む
 */
import type { Metadata } from "next";
import { Noto_Sans_JP, Merriweather } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BackgroundPattern } from "@/components/BackgroundPattern";

// 日本語フォントの設定（Noto Sans JP）
const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

// 英字セリフフォントの設定（Merriweather）
const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["400", "700"],
});

// サイトのメタデータ設定（SEO対策）
export const metadata: Metadata = {
  title: "HayHay AungSan",
  description: "ミャンマー難民・山岳民族を支援する学生団体",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${notoSansJP.variable} ${merriweather.variable} antialiased`}
      >
        <BackgroundPattern />
        <div className="relative z-10">
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
