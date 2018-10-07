import { Container } from 'inversify';
import { TYPES } from '../types';
import { GameMain } from '../game/GameMain';

export function configDefaultDependencies(diContainer: Container): void {
  diContainer.bind<string>(TYPES.Version).toConstantValue('1.2.0');
  diContainer.bind<GameMain>(TYPES.GameMain).to(GameMain);
}
