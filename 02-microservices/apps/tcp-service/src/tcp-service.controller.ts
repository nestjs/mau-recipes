import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { TcpServiceService } from './tcp-service.service';

@Controller()
export class TcpServiceController {
  constructor(private readonly tcpServiceService: TcpServiceService) {}

  @MessagePattern('getHello')
  getHello(): string {
    return this.tcpServiceService.getHello();
  }
}
