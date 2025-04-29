# Stage 1: Development environment
# This stage will be used for development purposes.
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

EXPOSE ${PORT}

# Stage 2: Builder
# This stage will build the application and prepare it for production.
# It will include all the necessary files and dependencies for running the application.
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma/

RUN npm install

COPY . .

RUN npm run build

# Stage 3: Production environment
# Use a smaller image for production
# This stage will only include the necessary files for running the application
# and will not include development dependencies or build tools.
FROM node:20-alpine AS production

WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/scripts ./scripts

EXPOSE ${PORT}
