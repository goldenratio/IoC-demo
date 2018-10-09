import { inject, injectable } from 'inversify';
import { GAME_TYPES } from './types/index';
import { GameModel } from './GameModel';

@injectable()
export class NinjaController {
  constructor(
    @inject(GAME_TYPES.GameModel) gameModel: GameModel
  ) {
    console.log('Ninja Controller created!', gameModel);
  }
}
