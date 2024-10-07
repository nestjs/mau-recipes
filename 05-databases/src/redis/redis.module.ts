import { Module } from '@nestjs/common';
import { IoRedisClient } from './io-redis.client';

@Module({
  providers: [IoRedisClient],
  exports: [IoRedisClient],
})
export class RedisModule {}
