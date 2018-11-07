FROM node:10-slim

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

# add npm package
COPY package.json /usr/src/app/package.json

RUN yarn config set registry 'https://registry.npm.taobao.org' && yarn install

# copy code
COPY . /usr/src/app

EXPOSE 7001

CMD yarn debug
