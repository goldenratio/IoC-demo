import { Container } from 'inversify';
import { Clazz } from '../../types';

// note: when you add new properties, re-build the project
// watch - doesn't pickup the new properties
export interface SlotModule {
  readonly GameClazz: Clazz<SlotGame>;
  readonly autoInstantiate?: ReadonlyArray<Clazz>;
  configDependencies: (diContainer: Container) => void;
}

export interface SlotGame {
  foo(): void;
}
