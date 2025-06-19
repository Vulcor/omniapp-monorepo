import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const port = process.env.API_PORT ?? 3099;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
}

bootstrap()
  .then(() => {
    console.log('App is running on port', port);
  })
  .catch((err) => {
    console.error('Error starting the application:', err);
  });
