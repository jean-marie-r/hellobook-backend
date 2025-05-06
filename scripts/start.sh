#!/bin/sh

set -e

# Start the application
if [ "$NODE_ENV" = "production" ]; then
  npm run start:prod
else
  npm run start:dev
fi
