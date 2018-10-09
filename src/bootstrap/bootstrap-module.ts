import 'reflect-metadata';
import 'polyfills';
import { Container } from 'inversify';

import { Module } from './module';
import { SlotModuleConfig } from '../api';
import { TYPES } from '../types';
import { GameMain } from '../game/game-main';
import { ModuleConfig } from './types';
import { PixiRenderer } from '../renderers/pixi/pixi-renderer';
import { HowlerSoundSystem } from '../sound-systems/howler/howler-sound-system';

const diContainer = new Container();

const frameworkModuleConfig: ModuleConfig = {
  autoInstantiate: [
    GameMain
  ],
  addBindings: (diContainer: Container) => {
    diContainer.bind(TYPES.Renderer).to(PixiRenderer).inSingletonScope();
    diContainer.bind(TYPES.SoundSystem).to(HowlerSoundSystem).inSingletonScope();
  }
};

export function bootstrapModule(moduleConfig: SlotModuleConfig): void {
  // todo: create different diContainers for each module
  const frameworkModule = new Module(frameworkModuleConfig, diContainer);
  const gameModule = new Module(moduleConfig, diContainer);

  const { GameClazz } = moduleConfig;
  diContainer.bind(TYPES.SlotGame).to(GameClazz);
  frameworkModule.initialize();
  gameModule.initialize();
}

