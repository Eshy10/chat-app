# Unauthenticated Chat App

[Chat Link](https://chat-app-eshy10.vercel.app/)

## Features

- 🧙‍♂️ E2E typesafety with [tRPC](https://trpc.io)
- ⚡ Full-stack React with Next.js
- ⚡ Database with Prisma
- ⚙️ VSCode extensions
- 🎨 ESLint + Prettier
- 💚 CI setup using GitHub Actions:
  - ✅ E2E testing with [Playwright](https://playwright.dev/)
  - ✅ Linting
- 🔐 Validates your env vars on build and start


### Requirements

- Node >= 14
- MongoDB
- S3

## Development

### Start project

```bash
git clone
cd chat-appp
run npm install
run npx prisma generate 
run npx prisma db push 
run yarn dev
```

### Commands

```bash
yarn build      # runs `prisma generate` + `prisma migrate` + `next build`
yarn db-reset   # resets local db
yarn dev        # starts next.js
yarn dx         # starts postgres db + runs migrations + seeds + starts next.js 
yarn test-dev   # runs e2e tests on dev
yarn test-start # runs e2e tests on `next start` - build required before
yarn test:unit  # runs normal jest unit tests
yarn test:e2e   # runs e2e tests
```

## Improvement
- pdf and Audio Files Upload
- Authenticated chat
- Preview Modal to improve the current preview Container
- List of Chat Rooms
- User Profile

