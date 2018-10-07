import 'reflect-metadata';
import 'polyfills';

import { SlotGame, SlotModule } from '../game/api';
import { TYPES } from '../types';
import { MainGame } from '../game/MainGame';
import { Container } from 'inversify';
// import { diContainer } from '../ioc/ioc-container';


export function bootstrapModule(module: SlotModule): void {

  const { GameClazz, autoInstantiate } = module;

  const diContainer = new Container();
  diContainer.bind<SlotGame>(TYPES.SlotGame).to(GameClazz);
  diContainer.bind<string>(TYPES.Version).toConstantValue('asa');
  diContainer.bind(MainGame).toSelf();

  if (autoInstantiate && autoInstantiate.length > 0) {
    autoInstantiate.forEach((clazz) => {
      diContainer.bind(clazz).toSelf();
    });

    autoInstantiate.forEach((clazz) => {
      diContainer.resolve(clazz);
    });
  }

  const mainGame = diContainer.get<MainGame>(MainGame);
  // test - some function call
  mainGame.someStuff();
}
