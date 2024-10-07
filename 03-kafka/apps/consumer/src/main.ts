import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ConsumerModule } from './consumer.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    ConsumerModule,
    {
      transport: Transport.KAFKA,
      options: {
        client: {
          brokers: [
            process.env.KAFKA_BROKER_URL_1,
            process.env.KAFKA_BROKER_URL_2,
          ],
          ssl: true,
          sasl: {
            mechanism: 'scram-sha-512',
            username: process.env.KAFKA_BROKER_USERNAME,
            password: process.env.KAFKA_BROKER_PASSWORD,
          },
        },
      },
    },
  );
  await app.listen();
}
bootstrap();
