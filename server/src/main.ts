import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DatabaseItem } from './types';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.setGlobalPrefix('api'); 
 
  await app.listen(process.env.PORT ?? 3000);
}

const initialCardData: DatabaseItem[] = []

global.cardData = initialCardData;

bootstrap();
