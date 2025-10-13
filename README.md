# ルアー登録アプリ仕様書

## アプリ概要
ルアーを管理・記録するWebアプリケーション

## 基本仕様

### アプリ名
**"ルアーログ (Lure Log)"**

### 主要エンティティ
1. **ルアー** - メインデータ
2. **釣果記録** - いつ、どこで、何が釣れたか

### 基本情報項目
- ルアー名
- ブランド（テキスト入力）
- カテゴリ（テキスト入力）
- サイズ（長さ・重量）
- カラー
- 価格
- 購入日
- 状態（新品、使用済み、破損等）
- 画像
- メモ

## データベース設計

### テーブル構成

#### 1. lures（ルアーテーブル）
```sql
- id (UUID, Primary Key)
- name (VARCHAR, ルアー名)
- brand (VARCHAR, ブランド名)
- category (VARCHAR, カテゴリ名)
- length_mm (INTEGER, 長さ)
- weight_g (DECIMAL, 重量)
- color (VARCHAR, カラー)
- price (INTEGER, 価格（セント単位）)
- purchase_date (DATE, 購入日)
- condition (ENUM: 'new', 'used', 'damaged')
- image_url (VARCHAR, 画像URL)
- notes (TEXT, メモ)
- created_at (TIMESTAMP)
- updated_at (TIMESTAMP)
```

#### 2. catch_records（釣果記録テーブル）
```sql
- id (UUID, Primary Key)
- lure_id (UUID, Foreign Key)
- fish_species (VARCHAR, 魚種)
- fish_size_cm (INTEGER, 魚のサイズ)
- location (VARCHAR, 釣り場)
- date (DATE, 釣行日)
- weather (VARCHAR, 天候)
- water_temp (INTEGER, 水温)
- notes (TEXT, メモ)
- created_at (TIMESTAMP)
```

## 画面構成・ページ設計

### ページ構成
1. **ダッシュボード** (`/dashboard`)
   - ルアー総数、最近追加したルアー、釣果統計
   - 最近の釣果記録（直近5件）

2. **ルアー一覧** (`/lures`)
   - 検索・フィルタ機能
   - ページネーション
   - グリッド表示（画像付き）

3. **ルアー詳細** (`/lures/[id]`)
   - ルアー詳細情報表示
   - 釣果記録一覧
   - 編集・削除ボタン

4. **ルアー登録・編集** (`/lures/create`, `/lures/[id]/edit`)
   - フォーム入力
   - 画像アップロード
   - バリデーション

5. **釣果記録** (`/catches`)
   - 釣果一覧・登録・編集
   - ルアー選択機能

### レイアウト構成
- サイドナビゲーション（チュートリアルと同様）
- レスポンシブデザイン
- モバイルファースト
- shadcn/uiコンポーネント（Button, Card, Table, Form, Dialog等）を活用

## 機能一覧

### 基本機能（CRUD）
1. **ルアー管理**
   - 作成（Create）・読み取り（Read）・更新（Update）・削除（Delete）
   - 画像アップロード・表示
   - 検索・フィルタリング・ソート

2. **釣果記録管理**
   - CRUD操作
   - ルアーとの紐づけ

### 高度な機能
1. **ダッシュボード**
   - 統計情報の可視化
   - 最近の活動表示

2. **検索・フィルタ**
   - テキスト検索
   - ブランド・カテゴリ・価格帯でのフィルタ
   - 複合条件検索

3. **ページネーション**
   - 大量データの効率的な表示
   - 無限スクロール対応

4. **レスポンシブデザイン**
   - モバイル・タブレット対応

## 技術スタック・実装方針

### フロントエンド
- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui** (UIコンポーネントライブラリ)
- **React Hook Form** (フォーム管理)
- **Zod** (バリデーション)

### バックエンド
- **Next.js API Routes**
- **PostgreSQL** (データベース)
- **Prisma** (ORM)
- **NextAuth.js** (認証 - 将来拡張用)

### インフラ・デプロイ
- **Vercel** (ホスティング)
- **Vercel Postgres** (データベース)
- **Vercel Blob** (画像ストレージ)

### 開発ツール
- **ESLint** + **Prettier**
- **Husky** (Git hooks)