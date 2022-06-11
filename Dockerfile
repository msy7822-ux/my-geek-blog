# ベースイメージの指定
FROM node:17-alpine

# 作業ディレクトリの指定
WORKDIR /opt/app

ENTRYPOINT [ "sh", "./setup.sh" ]
