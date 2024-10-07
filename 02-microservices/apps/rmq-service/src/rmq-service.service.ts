import { Injectable } from '@nestjs/common';

@Injectable()
export class RmqServiceService {
  getHello(): string {
    return 'Hello from "RabbitMQ" service!';
  }
}
