import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'KAFKA_SERVICE',
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
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
