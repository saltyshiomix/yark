import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { LogicModule } from './logics/logic.module';
import { RouteModule } from './routes/route.module';
import {
  RedirectIfAuthenticatedMiddleware,
  RedirectIfNotAuthenticatedMiddleware,
} from './logics/auth/middlewares';

@Module({
  imports: [
    LogicModule,
    RouteModule,
  ],
})
export class AppModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(RedirectIfAuthenticatedMiddleware)
      .forRoutes({
        path: 'login',
        method: RequestMethod.GET,
      });

    consumer
      .apply(RedirectIfNotAuthenticatedMiddleware)
      .forRoutes({
        path: '',
        method: RequestMethod.GET,
      });
  }
}
