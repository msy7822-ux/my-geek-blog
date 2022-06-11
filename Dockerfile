# ベースイメージの指定
FROM node:17-alpine

# 作業ディレクトリの指定
WORKDIR /opt/app

# node_modulesディレクトリをマウントしておく用のディレクトリをコンテナ内に作成する
RUN mkdir /volume_dir

COPY ./src/node_modules /volume_dir
# node_modulesディレクトリをボリュームにマウントさせておく
VOLUME /volume_dir
