import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { LoggerMiddleware } from './logger/logger.middleware';
import { AuthMiddleware } from './auth/auth.middleware';
import { PrismaService } from 'src/prisma.service';
import {JwtModule} from '@nestjs/jwt'
import { jwtConstants } from './entities/jwt-constanst';

@Module({
  imports:[
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '10s' },
    }),
  ],

  controllers: [UsersController],
  providers: [UsersService,PrismaService]
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
      consumer.apply(LoggerMiddleware).forRoutes(
        {path:'/users',method:RequestMethod.GET},
        {path:'/users',method:RequestMethod.POST}
      ).apply(AuthMiddleware).forRoutes('users')
  }
}
