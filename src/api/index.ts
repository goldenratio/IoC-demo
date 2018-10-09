import { Container } from 'inversify';
import { Clazz } from '../types';

// note: when you add new properties, re-build the project
// watch - doesn't pickup the new properties
export interface SlotModuleConfig {
  readonly name: string;
  readonly GameClazz: Clazz<SlotGame>;
  readonly autoInstantiate?: ReadonlyArray<Clazz>;
  addBindings: (diContainer: Container) => void;
}

export interface SlotGame {
  foo(): void;
}
