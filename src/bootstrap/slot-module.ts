import { Container } from 'inversify';
import { SlotModuleConfig } from '../api';


export class SlotModule {
  private readonly _privateContainer: Container = new Container();
  // private readonly _publicContainer: Container = new Container();

  private readonly _config: SlotModuleConfig;

  constructor(config: SlotModuleConfig) {
    // this._publicContainer.parent = this._privateContainer;
    this._config = config;
    const { addBindings } = this._config;
    addBindings(this._privateContainer);
  }

  onInit(): void {
    const { autoInstantiate } = this._config;
    if (autoInstantiate && autoInstantiate.length > 0) {
      autoInstantiate.forEach((serviceIdentifier) => {
        this._privateContainer.resolve(serviceIdentifier);
      });
    }
  }

  get container(): Container {
    return this._privateContainer;
  }

}
