import { Injectable } from '@nestjs/common';

@Injectable()
export class TcpServiceService {
  getHello(): string {
    return 'Hello from "TCP" service!';
  }
}
