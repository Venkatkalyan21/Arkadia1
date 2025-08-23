FROM node:20-alpine

WORKDIR /app

COPY packages/backend/package.json packages/backend/pnpm-lock.yaml ./

RUN npm install -g pnpm

RUN pnpm install

COPY packages/backend/tsconfig.json ./

COPY packages/backend/src ./src

RUN npm run build

EXPOSE 3001

CMD ["node", "dist/index.js"]
