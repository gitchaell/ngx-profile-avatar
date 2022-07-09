import { WebGLRenderer, PerspectiveCamera } from 'three';
import { AvatarBuilder } from '../builders/avatar.builder';
import { AvatarInput } from '../inputs/avatar.input';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';

export class AvatarFactory {

	constructor(
		private renderer: WebGLRenderer,
		private world: GLTF,
		private camera: PerspectiveCamera,
	) {
		return this;
	}

	buildAvatar(input: AvatarInput) {

		const builder = new AvatarBuilder(this.world, this.camera, this.renderer);

		if (input.tracker === 'cursor') builder.withCursorTracking();
		if (input.tracker === 'face') builder.withFaceTracking();

		return builder.build();
	}

}
