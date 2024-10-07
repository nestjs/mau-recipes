import { Injectable } from '@nestjs/common';

@Injectable()
export class RedisServiceService {
  getHello(): string {
    return 'Hello from "Redis" service!';
  }
}
