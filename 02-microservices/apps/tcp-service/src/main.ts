import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { TcpServiceModule } from './tcp-service.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    TcpServiceModule,
    {
      transport: Transport.TCP,
      options: {
        host: '0.0.0.0',
        port: process.env.PORT ? +process.env.PORT : 3001,
      },
    },
  );
  await app.listen();
}
bootstrap();
