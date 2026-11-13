import { Test, TestingModule } from '@nestjs/testing';
import { HeroesController } from '../src/heroes.controller';
import { HeroesModule } from '../src/heroes.module';

describe('HeroesController (e2e)', () => {
  let heroesController: HeroesController;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [HeroesModule],
    }).compile();

    heroesController = moduleFixture.get<HeroesController>(HeroesController);
  });

  it('findOne', () => {
    expect(heroesController.findOne({ id: 1 })).toEqual({
      id: 1,
      name: 'John',
    });
  });
});
