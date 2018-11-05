FROM node:10-slim

COPY . /app

WORKDIR /app

ENV NODE_ENV=production

RUN yarn config set registry 'https://registry.npm.taobao.org' && yarn install

CMD ["yarn", "start"]