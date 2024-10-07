import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';

@Controller()
export class ConsumerController {
  @EventPattern('ping')
  handlePing(@Payload() data: string) {
    console.log(data);
  }
}
