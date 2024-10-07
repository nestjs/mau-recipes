import { Module } from '@nestjs/common';
import { ConsumerController } from './consumer.controller';

@Module({
  imports: [],
  controllers: [ConsumerController],
})
export class ConsumerModule {}
