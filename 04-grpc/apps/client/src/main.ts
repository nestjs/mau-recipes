import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3001);

  // Raw gRPC client example
  // For those who don't want to use the @nestjs/microservices package
  // const packageDefinition = protoLoader.loadSync(
  //   join(__dirname, 'hero.proto'),
  //   {
  //     keepCase: true,
  //     longs: String,
  //     enums: String,
  //     defaults: true,
  //     oneofs: true,
  //   },
  // );
  // const hero = grpc.loadPackageDefinition(packageDefinition).hero;
  // const client = new hero.HeroesService(
  //   'YOUR_SERVICE_HOST:YOUR_SERVICE_PORT',
  //   grpc.credentials.createSsl(),
  // );
  // client.FindOne({ id: 1 }, (err, val) => {
  //   console.log(err, val);
  // });
}
bootstrap();
