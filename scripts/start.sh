#!/bin/sh

set -e

>&2 echo "$NODE_ENV"

# Start the application
if [ "$NODE_ENV" = "production" ]; then
  npm run start:prod
else
  npm run start:dev
fi
