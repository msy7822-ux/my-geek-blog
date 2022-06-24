# storybookをdockerコンテナ起動する上で参考にした記事
# => https://github.com/cityofaustin/janis/blob/master/Dockerfile.storybook

# ベースイメージの指定
FROM node:17-alpine

# 作業ディレクトリの指定
WORKDIR /opt/app/

# npmパッケージのインストールに必要なファイルをコピー
COPY src/package.json src/package.json
COPY src/yarn.lock src/yarn.lock

# storybookの設定まわりをコピーする
COPY src/.storybook/ src/.storybook/
COPY src/ src/

WORKDIR /opt/app/src
RUN yarn install
