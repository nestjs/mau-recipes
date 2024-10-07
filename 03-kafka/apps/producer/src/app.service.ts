import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  constructor(
    @Inject('KAFKA_SERVICE') private readonly kafkaService: ClientKafka,
  ) {}

  async ping() {
    await lastValueFrom(this.kafkaService.emit('ping', 'Hello from producer'));
  }
}
