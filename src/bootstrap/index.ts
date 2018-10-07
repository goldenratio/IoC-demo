import 'reflect-metadata';
import 'polyfills';
import { SlotGame, SlotModule } from '../game/api/index';
import { TYPES } from '../types';
import { MainGame } from '../game';
import { diContainer } from '../ioc/index';


export function bootstrapSlotModule(module: SlotModule): void {

  const { GameClazz, autoInstantiate } = module;

  diContainer.bind<SlotGame>(TYPES.SlotGame).to(GameClazz);
  diContainer.bind<string>(TYPES.Version).toConstantValue('1.2.0');
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
