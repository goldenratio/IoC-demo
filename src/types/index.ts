export interface Clazz<T = any> extends Function {
  new (...args: any[]): T
}

export const TYPES = {
  SlotGame: Symbol.for('SlotGame'),
  MainGame: Symbol.for('MainGame'),
  Version: Symbol.for('Version')
};
