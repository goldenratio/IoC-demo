import { Clazz } from '../../types';
import { Container } from 'inversify';

// note: when you add new properties, re-build the project
// watch - doesn't pickup the new properties
export interface ModuleConfig {
  readonly autoInstantiate?: ReadonlyArray<Clazz>;
  addBindings?: (diContainer: Container) => void;
  onInit?: (diContainer: Container) => void;
}
