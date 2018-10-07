import { inject, injectable } from 'inversify';
import { TYPES } from '../src/types';

@injectable()
export class NinjaController {
  constructor(
    @inject(TYPES.Version) version: string
  ) {
    console.log('Ninja Controller created ', version);
  }
}
