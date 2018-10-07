import { inject, injectable } from 'inversify';
import { SlotGame } from './api/index';
import { TYPES } from '../types/index';

@injectable()
export class MainGame {

  private readonly slotGame: SlotGame;

  constructor(
    @inject(TYPES.SlotGame) slotGame: SlotGame,
    @inject(TYPES.Version) version: string
  ) {
    console.log('Main Game ', slotGame, version);
    this.slotGame = slotGame;
  }

  someStuff(): void {
    // some stuff
    console.log('some stuff');
    this.slotGame.foo();
  }
}
