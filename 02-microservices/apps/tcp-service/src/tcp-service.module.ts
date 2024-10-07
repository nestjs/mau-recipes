import { Module } from '@nestjs/common';
import { TcpServiceController } from './tcp-service.controller';
import { TcpServiceService } from './tcp-service.service';

@Module({
  imports: [],
  controllers: [TcpServiceController],
  providers: [TcpServiceService],
})
export class TcpServiceModule {}
