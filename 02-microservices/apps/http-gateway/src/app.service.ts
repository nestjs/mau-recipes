import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
import { ExternalService } from './enums/external-service.enum';

@Injectable()
export class AppService {
  constructor(
    @Inject(ExternalService.Tcp) private readonly tcpService: ClientProxy,
    @Inject(ExternalService.Redis) private readonly redisService: ClientProxy,
    @Inject(ExternalService.RabbitMQ) private readonly rmqService: ClientProxy,
    @Inject(ExternalService.Nats) private readonly natsService: ClientProxy,
  ) {}

  async sayHello() {
    return {
      tcp: await this.sayHelloToTcpService(),
      redis: await this.sayHelloToRedisService(),
      rmq: await this.sayHelloToRabbitMQService(),
      nats: await this.sayHelloToNatsService(),
      http: await this.sayHelloToPrivateHttpService(),
    };
  }

  private sayHelloToTcpService() {
    return lastValueFrom(this.tcpService.send<string, string>('getHello', ''));
  }

  private sayHelloToRedisService() {
    return lastValueFrom(
      this.redisService.send<string, string>('getHello', ''),
    );
  }

  private sayHelloToRabbitMQService() {
    return lastValueFrom(this.rmqService.send<string, string>('getHello', ''));
  }

  private sayHelloToNatsService() {
    return lastValueFrom(this.natsService.send<string, string>('getHello', ''));
  }

  private async sayHelloToPrivateHttpService() {
    const res = await fetch(
      process.env.PRIVATE_HTTP_SERVICE_URL ?? 'http://localhost:3002',
    );
    return await res.text();
  }
}
