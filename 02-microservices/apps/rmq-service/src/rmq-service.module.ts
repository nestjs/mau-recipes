import { Module } from '@nestjs/common';
import { RmqServiceController } from './rmq-service.controller';
import { RmqServiceService } from './rmq-service.service';

@Module({
  imports: [],
  controllers: [RmqServiceController],
  providers: [RmqServiceService],
})
export class RmqServiceModule {}
