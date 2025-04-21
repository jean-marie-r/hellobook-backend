# Hellobook API

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
NODE_ENV=development
PORT=4000
POSTGRES_USER=postgres
POSTGRES_PASSWORD=yourpassword
POSTGRES_DB=postgres
POSTGRES_PORT=5432
DATABASE_URL=postgresql://postgres:yourpassword@db:5432/postgres?schema=public
HEALTHCHECK_URL=localhost:4000/api/health
```

## Tech Stack

- NestJS & TypeScript
- Vitest
- Prisma ORM
- PostgreSQL
- Docker
- JWT Authentication
