# 概要

本リポジトリでは、私が今後のアウトプットに使用する技術ブログサイトの開発を行なっております。

# 技術スタック

### フロントエンド

- 言語: `TypeScript`
- フレームワーク: `Next.js`
- インフラ: `Docker`

### バックエンド

- `microCMS`

# ブランチ運用

基本的には`develop`ブランチが作業ブランチになります。
そして、`main`ブランチでリリース作業などを行なっていきます。

# コマンド

基本的に本プロジェクトはフロントエンドがメインで、且つフロントエンドは 開発環境では docker の上に乗せています。

### docker イメージのビルド

```bash: bash
dopcker-compose build
```

### イメージをもとにコンテナを起動する

```bash: bash
docker-compose up -d
```

### docker のコンテナに入る

```bash: bash
dockert-compose run --rm app sh
```

### docker コンテナの停止

```bash: bash
docker-compose stop
```

# ブログを投稿する際の注意点

- 各章のタイトルは、h2 を使用する。
