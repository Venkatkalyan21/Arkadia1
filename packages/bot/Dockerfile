FROM node:20-alpine

WORKDIR /app

COPY packages/bot/package.json packages/bot/pnpm-lock.yaml ./

RUN npm install -g pnpm

RUN pnpm install

COPY packages/bot/tsconfig.json ./

COPY packages/bot/src ./src

RUN npm run build

CMD ["node", "dist/index.js"]
