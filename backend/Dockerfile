FROM node:16

WORKDIR /usr/src/app

COPY . .

RUN yarn

EXPOSE 5000

ENV NODE_ENV=production

CMD ["yarn", "run" ,"dev"]
