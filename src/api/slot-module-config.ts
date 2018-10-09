import { ModuleConfig } from '../bootstrap/types';
import { Clazz } from '../types';
import { SlotGame } from './index';

// note: when you add new properties, re-build the project
// watch - doesn't pickup the new properties
export interface SlotModuleConfig extends ModuleConfig {
  readonly GameClazz: Clazz<SlotGame>;
}
