import path from 'path';
import { Module } from '@nestjs/common';
import { EnvService } from './env.service';

@Module({
  providers: [
    {
      provide: EnvService,
      useValue: new EnvService(
        path.join(process.cwd(), 'prisma/.env'),
      ),
    },
  ],
  exports: [
    EnvService,
  ],
})
export class EnvModule {}
