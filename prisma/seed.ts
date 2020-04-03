import bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';

(async () => {
  const prisma = new PrismaClient();
  try {
    await prisma.connect();

    // super user
    await prisma.user.create({
      data: {
        email: 'test@test.com',
        password: await bcrypt.hash('testpass', 8),
      },
    });
  } finally {
    prisma.disconnect();
  }
})();
