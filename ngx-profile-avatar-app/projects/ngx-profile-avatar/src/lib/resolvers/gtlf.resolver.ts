import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export class GLTFResolver {

	loader: GLTFLoader;

	constructor() {
		this.loader = new GLTFLoader();
		return this;
	}

	async resolve(url: string): Promise<GLTF> {
		return new Promise((resolve, reject) => {
			this.loader.load(url,
				gltf => resolve(gltf),
				({ loaded, total }) => { console.log('Loading ...', loaded / total * 100, '%') },
				error => reject(error)
			);
		});
	}

}
