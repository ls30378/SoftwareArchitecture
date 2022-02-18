FROM node:lts-alpine
ENV NODE_ENV=production
WORKDIR /comment
COPY ["./comment/yarn.lock","./comment/package.json", "./comment/package-lock.json*", "./comment/npm-shrinkwrap.json*", "./"]
RUN yarn install 
COPY ./comment .
EXPOSE 4000
# RUN chown -R node /usr/src/app
USER node
