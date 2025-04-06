# Development stage
FROM node:20-alpine AS development

WORKDIR /app

RUN apk add --no-cache postgresql-client

COPY package*.json ./
COPY tsconfig.json ./
COPY prisma ./prisma/
COPY scripts/start.sh ./scripts/start.sh

RUN chmod +x ./scripts/start.sh
RUN npm install --include=dev

COPY . .

EXPOSE 4000
