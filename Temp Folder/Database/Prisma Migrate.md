To migrate a **Prisma project to PostgreSQL in Next.js**, here’s a clear step-by-step guide:

---

## 🔧 Steps to Migrate Prisma to PostgreSQL in Next.js

### 1. Install Dependencies

Make sure you have Prisma and PostgreSQL client installed:

```bash
npm install @prisma/client
npm install prisma --save-dev
npm install pg
```

### 2. Update `schema.prisma`

Open your `prisma/schema.prisma` file and change the datasource to PostgreSQL:

```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}
```

### 3. Configure Environment Variables

In your `.env` file, set the PostgreSQL connection string:

```env
DATABASE_URL="postgresql://username:password@localhost:5432/mydb?schema=public"
```

- Replace `username`, `password`, and `mydb` with your actual PostgreSQL credentials.

### 4. Define Models

Add your models in `schema.prisma`. For example:

```prisma
model User {
  id        Int      @id @default(autoincrement())
  email     String   @unique
  name      String?
  createdAt DateTime @default(now())
}
```

### 5. Run Migrations

Generate and apply migrations:

```bash
npx prisma migrate dev --name init
```

This will create migration files and apply them to your PostgreSQL database.

### 6. Generate Prisma Client

```bash
npx prisma generate
```

### 7. Use Prisma in Next.js

Create a `lib/prisma.ts` file to initialize the client:

```ts
import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ["query"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
```

### 8. Query Data in Next.js

Example usage in an API route (`pages/api/users.ts`):

```ts
import { prisma } from "../../lib/prisma";

export default async function handler(req, res) {
  const users = await prisma.user.findMany();
  res.json(users);
}
```

---

✅ At this point, your Next.js app is fully connected to PostgreSQL via Prisma. You can now run queries, migrations, and manage your database seamlessly.

Would you like me to also show you how to **seed initial data** into PostgreSQL using Prisma? That’s often the next step after migration.