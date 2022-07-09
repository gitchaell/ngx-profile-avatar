import { WebGLRenderer, sRGBEncoding } from 'three';
import { Canvas } from '../canvas/canvas.model';

export class RendererBuilder {

	renderer: WebGLRenderer;

	constructor({ element, width, height }: Canvas) {

		this.renderer = new WebGLRenderer({ canvas: element, alpha: true, antialias: true });
		this.renderer.physicallyCorrectLights = true;
		this.renderer.outputEncoding = sRGBEncoding;
		this.renderer.setClearColor(0xffffff, 0);
		this.renderer.setSize(width, height);

		return this;
	}

	build() {
		return this.renderer;
	}

}
