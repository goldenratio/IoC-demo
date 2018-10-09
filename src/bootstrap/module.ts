import { Container } from 'inversify';
import { ModuleConfig } from './types';
import { Clazz } from '../types';

export class Module {
  private readonly _container: Container = new Container();
  private readonly _publicContainer: Container = new Container();

  private readonly _config: ModuleConfig;
  private readonly _name: string;

  constructor(config: ModuleConfig) {
    this._config = config;
    this._name = this._config.name;
    const { addBindings, exports } = this._config;
    if (typeof addBindings !== 'undefined') {
      addBindings(this._container);
    }

    if (exports && exports.length > 0) {
      exports.forEach((serviceIdentifier) => {
        this.registerExports(serviceIdentifier);
      });
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
    return this._publicContainer;
  }

  get name(): string {
    return this._name;
  }

  private registerExports(serviceIdentifier: Clazz): void {
    this._publicContainer.bind(serviceIdentifier).toDynamicValue(() => {
      return this._container.get(serviceIdentifier);
    });
  }

}
