import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get(':heroId')
  findOneHero(@Param('heroId', ParseIntPipe) heroId: number) {
    return this.appService.findOneHero(heroId);
  }
}
