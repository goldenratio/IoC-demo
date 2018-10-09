import { inject, injectable } from 'inversify';
import { TYPES } from '../types';
import { SlotGame } from '../api';

@injectable()
export class GameMain {

  private readonly slotGame: SlotGame;

  constructor(
    @inject(TYPES.SlotGame) slotGame: SlotGame,
    @inject(TYPES.Version) version: string
  ) {
    console.log('Game Main ', version);
    this.slotGame = slotGame;
  }

  someStuff(): void {
    // some stuff
    console.log('some stuff');
    this.slotGame.foo();
  }
}
