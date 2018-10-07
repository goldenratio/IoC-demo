import { injectable } from 'inversify';

@injectable()
export class NinjaController {
  constructor() {
    console.log('Ninja Controller created!');
  }
}
