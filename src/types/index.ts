export interface Clazz<T = any> extends Function {
  new (...args: any[]): T
}

export const TYPES = {
  SlotGame: Symbol.for('SlotGame'),
  GameMain: Symbol.for('GameMain'),
  Renderer: Symbol.for('Renderer'),
  SoundSystem: Symbol.for('SoundSystem')
};
