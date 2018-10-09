import { injectable } from 'inversify';

@injectable()
export class GameModel {
  constructor() {
    console.log('GAAAAME model');
  }
}
