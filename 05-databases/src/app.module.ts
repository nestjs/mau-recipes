import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { readFileSync } from 'fs';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RedisModule } from './redis/redis.module';

@Module({
  imports: [
    RedisModule, // see 'io-redis.client.ts' for more details
    TypeOrmModule.forRoot({
      type: 'postgres', // or 'mysql'
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [],
      synchronize: true,
      ssl: {
        rejectUnauthorized: true,
        ca: readFileSync(
          join(process.cwd(), 'certs', 'global-bundle.pem'),
        ).toString(),
      },
    }),
    MongooseModule.forRoot(
      process.env.MONGODB_URI, // example 'mongodb://localhost/my-database'
      {
        user: process.env.MONGODB_USER,
        pass: process.env.MONGODB_PASSWORD,
        verboseRetryLog: true,
        tls: true,
        tlsCAFile: join(process.cwd(), 'certs', 'global-bundle.pem'),
      },
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
