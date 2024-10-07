import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { RedisServiceModule } from './redis-service.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    RedisServiceModule,
    {
      transport: Transport.REDIS,
      options: {
        host: process.env.REDIS_DB_HOST ?? 'localhost',
        port: 6379,
        username: 'default',
        password: process.env.REDIS_DB_TOKEN,
        tls: {},
      },
    },
  );
  await app.listen();
}
bootstrap();
