import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { NatsServiceService } from './nats-service.service';

@Controller()
export class NatsServiceController {
  constructor(private readonly natsServiceService: NatsServiceService) {}

  @MessagePattern('getHello')
  getHello(): string {
    return this.natsServiceService.getHello();
  }
}
