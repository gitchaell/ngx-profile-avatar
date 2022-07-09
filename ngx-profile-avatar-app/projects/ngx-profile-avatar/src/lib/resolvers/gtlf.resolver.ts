import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export class GLTFResolver {

	loader: GLTFLoader;
	world: GLTF;

	constructor() {
		this.loader = new GLTFLoader();
		return this;
	}

	async resolve(url: string): Promise<GLTF> {
		if (this.world) {
			return new Promise((resolve) => resolve(this.world));
		}

		return new Promise((resolve, reject) => {
			this.loader.load(url,
				world => {
					this.world = world;
					resolve(world);
				},
				({ loaded, total }) => { console.log('Loading ...', loaded / total * 100, '%') },
				error => reject(error)
			);
		});
	}

}
