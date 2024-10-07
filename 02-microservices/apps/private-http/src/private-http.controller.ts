import { Controller, Get } from '@nestjs/common';
import { PrivateHttpService } from './private-http.service';

@Controller()
export class PrivateHttpController {
  constructor(private readonly privateHttpService: PrivateHttpService) {}

  @Get()
  getHello(): string {
    return this.privateHttpService.getHello();
  }
}
