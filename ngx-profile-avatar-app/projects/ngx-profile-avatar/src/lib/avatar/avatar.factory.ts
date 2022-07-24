import { EventEmitter } from '@angular/core';
import { WebGLRenderer, PerspectiveCamera } from 'three';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import { Tracker } from '../trackers/tracker.type';
import { AvatarBuilder } from './avatar.builder';

export class AvatarFactory {

	constructor(
		private renderer: WebGLRenderer,
		private world: GLTF,
		private camera: PerspectiveCamera,
	) {
		return this;
	}

	buildAvatar(tracker: Tracker, loading: EventEmitter<ProgressEvent>) {

		const builder = new AvatarBuilder(this.world, this.camera, this.renderer, loading);

		if (tracker === 'cursor') builder.withCursorTracking();
		if (tracker === 'face') builder.withFaceTracking();

		return builder.build();
	}

}
