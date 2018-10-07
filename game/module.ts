import { SlotModule } from '../src/game/api';
import { Game } from './game';
import { NinjaController } from './NinjaController';

export const GameModule: SlotModule = {
  GameClazz: Game,
  autoInstantiate: [
    NinjaController
  ]
};
