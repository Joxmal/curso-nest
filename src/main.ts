import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    whitelist:true
  }))

  const config = new DocumentBuilder()
  .addApiKey({ type: 'apiKey', name: 'authorization', in: 'header', }, 'xyz123')
  .addBearerAuth()
  .setTitle('MI API documentation')
  .setDescription('prueba')
  .setVersion('1.0')
  .addTag('items')
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.enableCors()

  await app.listen(3000);
}
bootstrap();
