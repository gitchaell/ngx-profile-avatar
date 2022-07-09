import { Canvas } from "../canvas/canvas.model";
import { CameraBuilder } from "./camera.builder";

export class CameraFactory {

	constructor(private canvas: Canvas) {
		return this;
	}

	buildCamera() {
		return new CameraBuilder(this.canvas).build()
	}

}
