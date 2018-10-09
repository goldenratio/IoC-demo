import 'reflect-metadata';
import 'polyfills';
import { Container } from 'inversify';

import { Module } from './module';
import { SlotModuleConfig } from '../api';
import { TYPES } from '../types';
import { GameMain } from '../game/game-main';
import { ModuleConfig } from './types';
import { PixiRenderer } from '../renderers/pixi-renderer';
import { HowlerSoundSystem } from '../sound-systems/howler-sound-system';

const frameworkModuleConfig: ModuleConfig = {
  name: 'framework',
  autoInstantiate: [
    GameMain
  ],
  addBindings: (diContainer: Container) => {
    diContainer.bind(TYPES.Renderer).to(PixiRenderer);
    diContainer.bind(TYPES.SoundSystem).to(HowlerSoundSystem);
  }
};

export function bootstrapSlotModule(moduleConfig: SlotModuleConfig): void {

  const frameworkModule = new Module(frameworkModuleConfig);
  const gameModule = new Module(moduleConfig);

  gameModule.container.bind(TYPES.SlotGame).to(moduleConfig.GameClazz);
  frameworkModule.initialize();

  console.log(gameModule);
}

