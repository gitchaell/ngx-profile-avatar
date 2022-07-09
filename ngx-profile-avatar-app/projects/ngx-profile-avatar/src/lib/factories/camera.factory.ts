import { CameraBuilder } from '../builders/camera.builder';
import { Canvas } from '../models/canvas';

export class CameraFactory {

	constructor(private canvas: Canvas) {
		return this;
	}

	buildCamera() {
		return new CameraBuilder(this.canvas).build()
	}

}
