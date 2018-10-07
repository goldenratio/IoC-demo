import { inject, injectable } from 'inversify';
import { SlotGame } from '../src/game/api';
import { TYPES } from '../src/types';

@injectable()
export class Game implements SlotGame {

  constructor(
    @inject(TYPES.Version) version: string
  ) {
    console.log('game ', version);
  }

  foo(): void {
    console.log('foo');
  }

}
