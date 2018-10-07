import { Clazz } from '../../types';

export interface SlotModule {
  readonly GameClazz: Clazz<SlotGame>;
  readonly autoInstantiate?: ReadonlyArray<Clazz>;
}

export interface SlotGame {
  foo(): void;
}
