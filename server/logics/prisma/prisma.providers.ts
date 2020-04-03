import { PrismaClient } from '@prisma/client';
import { PRISMA_CONNECTION } from './constants';

export const prismaProviders = [
  {
    provide: PRISMA_CONNECTION,
    useFactory: async () => {
      const prisma = new PrismaClient();
      await prisma.connect();
      return prisma;
    },
  },
];
