import { PerspectiveCamera, WebGLRenderer } from 'three';
import { ControlBuilder } from './control.builder';

export class ControlFactory {

	constructor(
		private camera: PerspectiveCamera,
		private renderer: WebGLRenderer
	) {
		return this;
	}

	buildControl() {
		return new ControlBuilder(this.camera, this.renderer).build()
	}

}
