import { WebGLRenderer, PerspectiveCamera } from 'three';
import { AvatarBuilder } from '../builders/avatar.builder';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import { AvatarTracker } from '../avatar-tracker.type';

export class AvatarFactory {

	constructor(
		private renderer: WebGLRenderer,
		private world: GLTF,
		private camera: PerspectiveCamera,
	) {
		return this;
	}

	buildAvatar(tracker: AvatarTracker) {

		const builder = new AvatarBuilder(this.world, this.camera, this.renderer);

		if (tracker === 'cursor') builder.withCursorTracking();
		if (tracker === 'face') builder.withFaceTracking();

		return builder.build();
	}

}
