import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { NatsServiceModule } from './nats-service.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    NatsServiceModule,
    {
      transport: Transport.NATS,
      options: {
        servers: [process.env.NATS_BROKER_URL ?? 'nats://localhost:4222'],
      },
    },
  );
  await app.listen();
}
bootstrap();
