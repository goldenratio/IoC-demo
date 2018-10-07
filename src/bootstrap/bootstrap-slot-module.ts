import 'reflect-metadata';
import 'polyfills';
import { SlotGame, SlotModule } from '../game/api';
import { TYPES } from '../types';
import { diContainer } from '../ioc';
import { GameMain } from '../game/GameMain';


export function bootstrapSlotModule(module: SlotModule): void {

  const { GameClazz, autoInstantiate } = module;

  diContainer.bind<SlotGame>(TYPES.SlotGame).to(GameClazz);
  diContainer.bind<string>(TYPES.Version).toConstantValue('1.2.0');
  diContainer.bind(GameMain).toSelf();

  if (autoInstantiate && autoInstantiate.length > 0) {
    autoInstantiate.forEach((clazz) => {
      diContainer.bind(clazz).toSelf();
    });

    autoInstantiate.forEach((clazz) => {
      diContainer.resolve(clazz);
    });
  }

  const mainGame = diContainer.get<GameMain>(GameMain);
  // test - some function call
  mainGame.someStuff();
}
