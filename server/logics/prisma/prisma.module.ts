import { Module } from '@nestjs/common';
import { prismaProviders } from './prisma.providers';

@Module({
  providers: [...prismaProviders],
  exports: [...prismaProviders],
})
export class PrismaModule {}
