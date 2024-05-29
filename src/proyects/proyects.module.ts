import { Module } from '@nestjs/common';
import { ProyectsController } from './proyects.controller';

@Module({
  controllers: [ProyectsController]
})
export class ProyectsModule {}
