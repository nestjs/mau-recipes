import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { HeroesModule } from './heroes.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    HeroesModule,
    {
      transport: Transport.GRPC,
      options: {
        package: 'hero',
        url: `0.0.0.0:${process.env.PORT ?? 3002}`,
        protoPath: join(__dirname, 'hero.proto'),
      },
    },
  );
  await app.listen();
}
bootstrap();
