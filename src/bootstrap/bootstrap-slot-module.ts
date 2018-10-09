import 'reflect-metadata';
import 'polyfills';
import { SlotModule } from './slot-module';
import { SlotGame, SlotModuleConfig } from '../api';
import { TYPES } from '../types/index';
import { GameMain } from '../game/GameMain';
import { Container } from 'inversify';

const moduleMap: Map<string, SlotModule> = new Map();

export function bootstrapSlotModule(moduleConfig: SlotModuleConfig): void {

  const { name } = moduleConfig;
  const module = new SlotModule(moduleConfig);
  module.onInit();
  moduleMap.set(name, module);

  // todo: create default module config
  const { container } = module;
  configDefaultDependencies(container);
  container.bind<SlotGame>(TYPES.SlotGame).to(moduleConfig.GameClazz);

  const mainGame = container.get<GameMain>(TYPES.GameMain);
  mainGame.someStuff();
}


function configDefaultDependencies(diContainer: Container): void {
  diContainer.bind<string>(TYPES.Version).toConstantValue('1.2.0');
  diContainer.bind<GameMain>(TYPES.GameMain).to(GameMain);
}
