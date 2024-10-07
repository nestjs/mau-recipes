import { Module } from '@nestjs/common';
import { NatsServiceController } from './nats-service.controller';
import { NatsServiceService } from './nats-service.service';

@Module({
  imports: [],
  controllers: [NatsServiceController],
  providers: [NatsServiceService],
})
export class NatsServiceModule {}
