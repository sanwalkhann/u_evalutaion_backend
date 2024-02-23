import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable global validation pipe

 
  // Enable CORS with options
  app.enableCors();

  app.useGlobalPipes(new ValidationPipe());

  // Start the application
  await app.listen(3002);

}

bootstrap();
