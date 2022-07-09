import { EventEmitter } from '@angular/core';
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export class GLTFResolver {

	loader: GLTFLoader;
	world: GLTF;

	constructor() {
		this.loader = new GLTFLoader();
		return this;
	}

	async resolve(url: string, onLoading: EventEmitter<ProgressEvent>): Promise<GLTF> {
		if (this.world) {
			return new Promise((resolve) => resolve(this.world));
		}

		return new Promise((resolve, reject) => {
			this.loader.load(url,
				world => {
					this.world = world;
					resolve(world);
				},
				event => onLoading.emit(event),
				error => reject(error)
			);
		});
	}

}
