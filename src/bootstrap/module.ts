import { Container } from 'inversify';
import { ModuleConfig } from './types';

export class Module {

  private readonly _container: Container;
  private readonly _config: ModuleConfig;

  constructor(config: ModuleConfig, diContainer: Container) {
    this._config = config;
    this._container = diContainer;

    const { addBindings } = this._config;
    if (typeof addBindings !== 'undefined') {
      addBindings(this._container);
    }
  }

  initialize(): void {
    const { autoInstantiate, onInit } = this._config;
    if (autoInstantiate && autoInstantiate.length > 0) {
      autoInstantiate.forEach((serviceIdentifier) => {
        this._container.resolve(serviceIdentifier);
      });
    }
    if (typeof onInit !== 'undefined') {
      onInit(this._container);
    }
  }

  get container(): Container {
    return this._container;
  }

}
