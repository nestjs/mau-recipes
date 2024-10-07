import { Injectable } from '@nestjs/common';

@Injectable()
export class PrivateHttpService {
  getHello(): string {
    return 'Hello from "private-http" service!';
  }
}
