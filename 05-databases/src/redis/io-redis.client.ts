import {
  Injectable,
  Logger,
  OnApplicationShutdown,
  OnModuleInit,
} from '@nestjs/common';
import Redis from 'ioredis';

@Injectable()
export class IoRedisClient
  extends Redis
  implements OnModuleInit, OnApplicationShutdown
{
  private readonly logger = new Logger(IoRedisClient.name);

  constructor() {
    const tlsOpts =
      process.env.NODE_ENV === 'production'
        ? { password: process.env.REDIS_TOKEN, tls: {} }
        : {};

    super({
      host: process.env.REDIS_HOST,
      port: +process.env.REDIS_PORT,
      ...tlsOpts,
    });
  }

  onModuleInit() {
    this.on('connect', () => {
      this.logger.log('Connected to redis instance');
    });

    this.on('ready', () => {
      this.logger.log('Redis instance is ready (data loaded from disk)');
    });

    this.on('error', (e) => {
      this.logger.error(`Error connecting to redis: "${e}"`);
    });
  }

  async onApplicationShutdown() {
    try {
      return await this.quit();
    } catch {}
  }
}
