import { Module } from '@nestjs/common';
import { HeroesController } from './heroes.controller';

@Module({
  imports: [],
  controllers: [HeroesController],
})
export class HeroesModule {}
