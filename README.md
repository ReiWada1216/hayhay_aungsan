# HayHay! AungSan! Web Page

タイ・ミャンマー難民支援プロジェクトのWebサイト。Next.js + microCMSで構築されています。

## 技術スタック

- **フレームワーク**: Next.js 16 (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **CMS**: microCMS
- **デプロイ**: Vercel

## セットアップ

### 1. 依存関係のインストール

```bash
npm install
```

### 2. 環境変数の設定

`.env.local`ファイルを作成し、以下の環境変数を設定してください：

```bash
# microCMS API設定
MICROCMS_SERVICE_DOMAIN=your-service-name
MICROCMS_API_KEY=your-api-key
```

`.env.example`ファイルをコピーして使用できます：
```bash
cp .env.example .env.local
```

その後、実際のmicroCMSの値を設定してください。

### 3. microCMSの設定

microCMSで以下のAPIを作成してください：

#### `activities` API
- **エンドポイント**: activities
- **APIの型**: リスト形式

フィールド:
- `title` (テキストフィールド) - 活動タイトル
- `date` (テキストフィールド) - 活動日時（例: "2025.11.16"）
- `tag` (セレクトフィールド) - Plan（予定）/ Past（過去）
- `category` (テキストフィールド) - カテゴリ（例: "イベント", "現地訪問"）
- `body` (テキストエリア) - 活動の説明
- `image` (画像) - サムネイル画像

#### `products` API
- **エンドポイント**: products
- **APIの型**: リスト形式

フィールド:
- `name` (テキストフィールド) - 商品名
- `price` (テキストフィールド) - 価格
- `description` (テキストエリア) - 商品説明
- `image` (画像) - 商品画像
- `origin` (テキストフィールド) - 産地・製作元
- `material` (テキストフィールド・任意) - 素材

### 4. 開発サーバーの起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてください。

## ビルド

```bash
npm run build
npm run start
```

## プロジェクト構成

```
HayHay_AungSan_Web_Page/
├── app/                    # Next.js App Router
│   ├── activities/         # 活動ページ
│   ├── members/           # メンバーページ
│   ├── shop/              # 商品ページ
│   └── page.tsx           # トップページ
├── components/            # 再利用可能なコンポーネント
├── lib/                   # ユーティリティとデータ取得
│   ├── microcms.ts       # microCMS連携
│   ├── types.ts          # 型定義
│   └── data/             # データ取得関数
└── public/               # 静態アセット
    └── images/           # 画像ファイル
```

## デプロイ

Vercelへのデプロイが推奨されています：

1. Vercelアカウントを作成
2. GitHubリポジトリと連携
3. 環境変数を設定
4. デプロイ

## ライセンス

このプロジェクトは教育支援活動の一環として作成されています。
HayHay AungSan