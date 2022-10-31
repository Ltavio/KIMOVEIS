FROM node:19.0.0

WORKDIR /app

COPY "package.json" .

RUN yarn

COPY . .

CMD ["yarn", "dev"]