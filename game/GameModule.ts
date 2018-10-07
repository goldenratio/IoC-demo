import { Container } from 'inversify';
import { SlotModule } from '../src/game/api';
import { Game } from './Game';
import { NinjaController } from './NinjaController';

export const GameModule: SlotModule = {
  GameClazz: Game,
  autoInstantiate: [
    NinjaController
  ],
  configDependencies: (diContainer: Container) => {
    console.log('configure game specific dependencies');
  }
};
