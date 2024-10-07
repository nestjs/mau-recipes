import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExternalService } from './enums/external-service.enum';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: ExternalService.Tcp,
        transport: Transport.TCP,
        options: {
          host: process.env.TCP_SERVICE_HOST ?? 'localhost',
          port: 3001,
        },
      },
      {
        name: ExternalService.Redis,
        transport: Transport.REDIS,
        options: {
          host: process.env.REDIS_DB_HOST ?? 'localhost',
          port: 6379,
          username: 'default',
          password: process.env.REDIS_DB_TOKEN,
          tls: {},
        },
      },
      {
        name: ExternalService.RabbitMQ,
        transport: Transport.RMQ,
        options: {
          urls: [process.env.RABBITMQ_BROKER_URL ?? 'amqp://localhost:5672'],
        },
      },
      {
        name: ExternalService.Nats,
        transport: Transport.NATS,
        options: {
          servers: [process.env.NATS_BROKER_URL ?? 'nats://localhost:4222'],
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
