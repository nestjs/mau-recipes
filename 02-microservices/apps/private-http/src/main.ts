import { NestFactory } from '@nestjs/core';
import { PrivateHttpModule } from './private-http.module';

async function bootstrap() {
  const app = await NestFactory.create(PrivateHttpModule);
  await app.listen(process.env.PORT ?? 3002);
}
bootstrap();
