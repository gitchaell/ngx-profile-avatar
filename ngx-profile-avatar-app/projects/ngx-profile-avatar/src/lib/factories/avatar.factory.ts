import { WebGLRenderer, PerspectiveCamera } from 'three';
import { AvatarBuilder } from '../builders/avatar.builder';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';

export class AvatarFactory {

	constructor(
		private renderer: WebGLRenderer,
		private world: GLTF,
		private camera: PerspectiveCamera,
	) {
		return this;
	}

	buildAvatar(tracker: 'cursor' | 'face') {

		const builder = new AvatarBuilder(this.world, this.camera, this.renderer);

		if (tracker === 'cursor') builder.withCursorTracking();
		if (tracker === 'face') builder.withFaceTracking();

		return builder.build();
	}

}
