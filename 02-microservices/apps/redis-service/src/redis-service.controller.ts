import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { RedisServiceService } from './redis-service.service';

@Controller()
export class RedisServiceController {
  constructor(private readonly redisServiceService: RedisServiceService) {}

  @MessagePattern('getHello')
  getHello(): string {
    return this.redisServiceService.getHello();
  }
}
