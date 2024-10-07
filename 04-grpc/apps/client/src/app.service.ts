import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';

interface HeroesService {
  findOne(data: { id: number }): Observable<any>;
}

@Injectable()
export class AppService implements OnModuleInit {
  private heroesService: HeroesService;

  constructor(@Inject('HERO_PACKAGE') private readonly client: ClientGrpc) {}

  onModuleInit() {
    this.heroesService = this.client.getService<HeroesService>('HeroesService');
  }

  getHello(): string {
    return 'Hello World!';
  }

  findOneHero(id: number) {
    return this.heroesService.findOne({ id });
  }
}
