#!/bin/sh

set -e

# Start the application
if [ "$NODE_ENV" = "production" ]; then
  npm run start:prod
else
  # Wait for the database to be ready
  until PGPASSWORD=$POSTGRES_PASSWORD psql -h "postgres" -U "$POSTGRES_USER" -d "$POSTGRES_DB" -c '\q'; do
    >&2 echo "Postgres is unavailable - sleeping"
    sleep 1
  done

  >&2 echo "Postgres is up - executing command"

  # Run migrations
  npm run prisma:generate

  if [ -z "$(ls -A prisma/migrations)" ]; then
    npx prisma migrate dev --name init
  else
    npm run prisma:migrate
  fi

  npm run start:dev
fi
