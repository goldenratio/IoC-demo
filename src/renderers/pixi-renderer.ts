import { injectable } from 'inversify';
import 'pixi.js';
import { Renderer } from './types';

@injectable()
export class PixiRenderer implements Renderer {

  constructor() {
    console.log('creating pixi renderer');
  }

  drawCircle(): void {
    console.log('I am drawing a circle');
  }

  drawSquare(): void {
    console.log('I am drawing a square');
  }

}
