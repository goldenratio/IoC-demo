import { Container } from 'inversify';
import { Game } from './Game';
import { NinjaController } from './NinjaController';
import { SlotModuleConfig } from '../src/api';
// import { GameModel } from './GameModel';

export const GameModuleConfig: SlotModuleConfig = {
  name: 'TestGame',
  GameClazz: Game,
  autoInstantiate: [
    NinjaController
  ],
  addBindings: (diContainer: Container) => {
    console.log('add game bindings');
    // diContainer.bind(GameModel).toSelf().inSingletonScope();
  }
};
