#!/bin/sh

set -e

until PGPASSWORD=$POSTGRES_PASSWORD psql -h "$POSTGRES_HOST" -U "$POSTGRES_USER" -d "$POSTGRES_DB" -c '\q'; do
  >&2 echo "Postgres is unavailable - sleeping"
  sleep 2
done

>&2 echo "Postgres is up - executing command"

# Run migrations
npm run prisma:generate

if [ -z "$(ls -A prisma/migrations)" ]; then
    npx prisma migrate dev --name init
else
    npm run prisma:migrate
fi

# Start the application
if [ "$NODE_ENV" = "production" ]; then
  npm run start:prod
else
  npm run start:dev
fi

# Clean up
unset PGPASSWORD
