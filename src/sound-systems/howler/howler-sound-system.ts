import { injectable } from 'inversify';
// import { Howl } from 'howler';
import { SoundSystem } from '../types';

@injectable()
export class HowlerSoundSystem implements SoundSystem {

  constructor() {
    console.log('creating howler sound system');
  }

  playCoolSound(): void {
    console.log('I am playing a cool sound');
  }
}
