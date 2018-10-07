import 'reflect-metadata';
import 'polyfills';
import { SlotGame, SlotModule } from '../game/api';
import { TYPES } from '../types';
import { configDefaultDependencies, diContainer } from '../ioc';
import { GameMain } from '../game/GameMain';

export function bootstrapSlotModule(module: SlotModule): void {

  const { GameClazz, autoInstantiate, configDependencies } = module;

  configDefaultDependencies(diContainer);
  configDependencies(diContainer);

  diContainer.bind<SlotGame>(TYPES.SlotGame).to(GameClazz);

  if (autoInstantiate && autoInstantiate.length > 0) {
    autoInstantiate.forEach((clazz) => {
      diContainer.bind(clazz).toSelf().inSingletonScope();
    });

    autoInstantiate.forEach((clazz) => {
      diContainer.resolve(clazz);
    });
  }

  const mainGame = diContainer.get<GameMain>(GameMain);
  // test - some function call
  mainGame.someStuff();
}
