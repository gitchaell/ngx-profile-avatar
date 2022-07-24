import { PerspectiveCamera, WebGLRenderer } from 'three';
import { ControlBuilder } from './control.builder';

export class ControlFactory {

	constructor(
		private camera: PerspectiveCamera,
		private renderer: WebGLRenderer
	) {
		return this;
	}

	buildControl(options) {
		return new ControlBuilder(this.camera, this.renderer, options).build()
	}

}
