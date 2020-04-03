import {
  Injectable,
  Inject,
} from '@nestjs/common';
import {
  PrismaClient,
  User,
} from '@prisma/client';
import { PRISMA_CONNECTION } from '../prisma/constants';

@Injectable()
export class UserService {
  constructor(
    @Inject(PRISMA_CONNECTION)
    private readonly prisma: PrismaClient<{}, User>,
  ) {}

  public async findOneByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findOne({
      where: {
        email,
      },
    });
  }
}
