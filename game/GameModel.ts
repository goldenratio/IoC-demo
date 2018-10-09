import { injectable } from 'inversify';

@injectable()
export class GameModel {
  public score: number = 100;

  constructor() {
    console.log('GAAAAME model');
  }
}
