import { Module } from '@nestjs/common';
import { TaskModule } from './task/task.module';
import { ProyectsModule } from './proyects/proyects.module';
import { UsersModule } from './users/users.module';
import { HelloModule } from './hello/hello.module';
import { PaymentsModule } from './payments/payments.module';


@Module({
  imports: [TaskModule, ProyectsModule, UsersModule, HelloModule, PaymentsModule],
  

})
export class AppModule {}
