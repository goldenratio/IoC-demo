import { Container } from 'inversify';
import { Game } from './Game';
import { NinjaController } from './NinjaController';
import { SlotModuleConfig } from '../src/api';
import { GameModel } from './GameModel';
import { GAME_TYPES } from './types';

export const GameModuleConfig: SlotModuleConfig = {
  GameClazz: Game,
  autoInstantiate: [
    NinjaController
  ],
  addBindings: (diContainer: Container) => {
    console.log('add game specific bindings');
    diContainer.bind(GAME_TYPES.GameModel).to(GameModel).inSingletonScope();
  }
};
