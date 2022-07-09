import { RendererBuilder } from '../builders/renderer.builder';
import { Canvas } from '../models/canvas';

export class RendererFactory {

	constructor(private canvas: Canvas) {
		return this;
	}

	buildRenderer() {
		return new RendererBuilder(this.canvas).build();
	}

}
