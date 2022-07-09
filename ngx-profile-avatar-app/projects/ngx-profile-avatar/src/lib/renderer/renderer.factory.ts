import { Canvas } from "../canvas/canvas.model";
import { RendererBuilder } from "./renderer.builder";

export class RendererFactory {

	constructor(private canvas: Canvas) {
		return this;
	}

	buildRenderer() {
		return new RendererBuilder(this.canvas).build();
	}

}
