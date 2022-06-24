# ベースイメージの指定
FROM node:17-alpine

# 作業ディレクトリの指定
WORKDIR /opt/app
# npmパッケージのインストールに必要なファイルをコピー
COPY src/package.json src/package.json
COPY src/yarn.lock src/yarn.lock

RUN yarn install
EXPOSE 3000
CMD ["yarn", "build"]
