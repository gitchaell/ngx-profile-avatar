import { EventEmitter } from '@angular/core';
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export class GLTFResolver {

	private loader: GLTFLoader;
	public world: GLTF;

	constructor() {
		this.loader = new GLTFLoader();
		return this;
	}

	public clean() {
		this.world = null;
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
