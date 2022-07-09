import { WebGLRenderer, PerspectiveCamera, Vector3 } from 'three';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import { CursorTracker } from '../helpers/cursor-tracker.helper';
import { FaceTracker } from '../helpers/face-tracker.helper';
import { AvatarObject3D } from '../objects/avatar.object';


export class AvatarBuilder {

	avatar: AvatarObject3D;
	cursorTracker: CursorTracker;
	faceTracker: FaceTracker;

	constructor(
		private world: GLTF,
		private camera: PerspectiveCamera,
		private renderer: WebGLRenderer,
	) {
		this.avatar = new AvatarObject3D(this.world.scene, this.camera);
		this.cursorTracker = new CursorTracker(this.renderer.domElement);
		this.faceTracker = new FaceTracker();

		return this;
	}

	withCursorTracking() {

		this.cursorTracker.start();

		this.cursorTracker.addEventListener('cursorRotation', ({ data }) => {
			this.avatar.setCursorRotation(data);
		});

		this.cursorTracker.addEventListener('cursorPosition', ({ data }) => {
			this.avatar.setCursorPosition(data);
		});

		return this;
	}

	withFaceTracking() {

		this.faceTracker.start();

		this.faceTracker.addEventListener('faceDetection', ({ data }) => {
			this.avatar.setFaceExpressions(data.blendShapes);
			this.avatar.setFaceRotation(data.rotation);
			this.avatar.setFaceTransform(data.transform);
		});

		return this;
	}

	build() {
		return this.avatar;
	}

}
