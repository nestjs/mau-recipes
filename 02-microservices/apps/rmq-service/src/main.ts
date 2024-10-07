import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { RmqServiceModule } from './rmq-service.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    RmqServiceModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: [process.env.RABBITMQ_BROKER_URL ?? 'amqp://localhost:5672'],
      },
    },
  );
  await app.listen();
}
bootstrap();
