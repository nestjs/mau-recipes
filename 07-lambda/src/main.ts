import { INestApplicationContext, Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Handler } from 'aws-lambda';
import { AppModule } from './app.module';
import { AppService } from './app.service';

let app: INestApplicationContext;

export const handler: Handler = async (event) => {
  try {
    if (!app) {
      app = await NestFactory.createApplicationContext(AppModule);
    }

    Logger.log('Processing event', JSON.stringify(event));

    const appService = app.get(AppService);
    return {
      statusCode: 200,
      body: JSON.stringify(appService.getHello()),
    };
  } catch (err) {
    Logger.error(err);

    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Internal server error',
      }),
    };
  }
};
