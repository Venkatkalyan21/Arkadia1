# Step 1: Build the React app
FROM node:18-alpine AS build

WORKDIR /app

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

COPY packages/frontend/package.json packages/frontend/
COPY packages/shared/package.json packages/shared/

RUN npm install -g pnpm

RUN pnpm install

COPY . .

WORKDIR /app/packages/frontend
RUN pnpm run build

FROM nginx:alpine

COPY --from=build /app/packages/frontend/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
