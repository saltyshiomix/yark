import {
  Module,
  INestApplication,
} from '@nestjs/common';
import session from 'express-session';
import { EnvModule } from '../env/env.module';
import { EnvService } from '../env/env.service';

@Module({
  imports: [
    EnvModule,
  ],
})
export class SessionModule {
  constructor(
    private readonly env: EnvService,
  ) {}

  public initialize(app: INestApplication) {
    const crear_interval = 7 * 24 * 60 * 60; // one week
    const pgSession = require('connect-pg-simple')(session);
    app.use(session({
      secret: '!JaPorNZdB$',
      store: new pgSession({
        conString: this.env.get('DATABASE_URL'),
        crear_interval,
      }),
      resave: false,
      saveUninitialized: false,
      rolling: true,
      cookie: {
        httpOnly: false,
        maxAge: crear_interval * 1000,
      },
    }));
  }
}
