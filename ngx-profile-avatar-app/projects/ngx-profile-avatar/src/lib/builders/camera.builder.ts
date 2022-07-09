import { PerspectiveCamera } from 'three';
import { Canvas } from '../models/canvas';

export class CameraBuilder {

	camera: PerspectiveCamera;

	constructor({ aspect }: Canvas) {
		this.camera = new PerspectiveCamera(50, aspect, 0.1, 1000);
		this.camera.position.set(0, 0.6, 0.5);
		this.camera.updateProjectionMatrix();
		return this;
	}


	build() {
		return this.camera;
	}

}
