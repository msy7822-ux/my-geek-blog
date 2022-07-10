# ベースイメージの指定
FROM node:17-alpine

# 作業ディレクトリの指定
WORKDIR /opt/app
# npmパッケージのインストールに必要なファイルをコピー
COPY src/package.json src/package.json
# COPY src/yarn.lock src/yarn.lock
# COPY src/ src/
# RUN rm /opt/app/src/package-lock.json
# RUN rm /opt/app/src/yarn.lock

RUN yarn install

EXPOSE 3000
CMD ["yarn", "build"]
