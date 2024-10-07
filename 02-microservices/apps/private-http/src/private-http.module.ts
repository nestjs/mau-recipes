import { Module } from '@nestjs/common';
import { PrivateHttpController } from './private-http.controller';
import { PrivateHttpService } from './private-http.service';

@Module({
  imports: [],
  controllers: [PrivateHttpController],
  providers: [PrivateHttpService],
})
export class PrivateHttpModule {}
