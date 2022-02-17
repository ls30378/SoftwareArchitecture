FROM node:17-alpine3.14

WORKDIR /client

COPY /client/package.json ./client/package.json
COPY /client/yarn.lock ./client/yarn.lock

RUN yarn install

COPY . ./client