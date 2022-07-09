import { ControlBuilder } from '../builders/control.builder';
import { PerspectiveCamera, WebGLRenderer } from 'three';

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
