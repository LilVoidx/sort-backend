import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { LoggerMiddleware } from './logger.middleware';
import { SortModule } from './sort/sort.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    SortModule,
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
