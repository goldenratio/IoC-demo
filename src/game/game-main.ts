import { inject, injectable, postConstruct } from 'inversify';
import { TYPES } from '../types';
import { Renderer } from '../renderers/types';
import { SoundSystem } from '../sound-systems/types';
import { SlotGame } from '../api';

@injectable()
export class GameMain {

  private _slotGame: SlotGame;

  constructor(
    @inject(TYPES.SlotGame) slotGame: SlotGame,
    @inject(TYPES.Renderer) renderer: Renderer,
    @inject(TYPES.SoundSystem) soundSystem: SoundSystem,
  ) {
    console.log('Game Main from framework');
    this._slotGame = slotGame;
    renderer.drawCircle();
    soundSystem.playCoolSound();
  }

  @postConstruct()
  initialize(): void {
    console.log('postConstruct initialize');
    this._slotGame.foo();
  }
}
