import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { RmqServiceService } from './rmq-service.service';

@Controller()
export class RmqServiceController {
  constructor(private readonly rmqServiceService: RmqServiceService) {}

  @MessagePattern('getHello')
  getHello(): string {
    return this.rmqServiceService.getHello();
  }
}
