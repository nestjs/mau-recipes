import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  run() {
    console.log(
      JSON.stringify({
        message: 'My cron job just ran!',
        date: new Date().toISOString(),
      }),
    );
  }
}
