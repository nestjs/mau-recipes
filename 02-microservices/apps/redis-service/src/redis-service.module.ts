import { Module } from '@nestjs/common';
import { RedisServiceController } from './redis-service.controller';
import { RedisServiceService } from './redis-service.service';

@Module({
  imports: [],
  controllers: [RedisServiceController],
  providers: [RedisServiceService],
})
export class RedisServiceModule {}
