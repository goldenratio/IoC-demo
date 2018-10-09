import { inject, injectable } from 'inversify';
import { SlotGame } from '../src/api';
import { TYPES } from '../src/types';
import { Renderer } from '../src/renderers/types';
import { SoundSystem } from '../src/sound-systems/types';
import { GameModel } from './GameModel';
import { GAME_TYPES } from './types';

@injectable()
export class Game implements SlotGame {

  constructor(
    @inject(TYPES.Renderer) renderer: Renderer,
    @inject(TYPES.SoundSystem) soundSystem: SoundSystem,
    @inject(GAME_TYPES.GameModel) gameModel: GameModel,
  ) {
    console.log('game ---- ');
    // renderer.drawSquare();
    // soundSystem.playCoolSound();
  }

  foo(): void {
    console.log('foo');
  }

}
