import { PerspectiveCamera, WebGLRenderer } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export class ControlBuilder {

	controls: OrbitControls;

	constructor(camera: PerspectiveCamera, renderer: WebGLRenderer, { enableRotate, enableZoom }) {
		this.controls = new OrbitControls(camera, renderer.domElement);
		this.controls.enablePan = true;
		this.controls.enableRotate = enableRotate;
		this.controls.enableZoom = enableZoom;
		this.controls.target.set(0, 0.6, 0);
		this.controls.update();
		return this;
	}


	build() {
		return this.controls;
	}

}
