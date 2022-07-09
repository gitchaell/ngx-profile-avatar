import { Vector3, WebGLRenderer, PerspectiveCamera } from 'three';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import { CursorTracker } from '../helpers/cursor-tracker.helper';
import { FaceTracker } from '../helpers/face-tracker.helper';
import { AvatarObject3D } from '../objects/avatar.object';


export class AvatarBuilder {

	avatar: AvatarObject3D;

	constructor(
		private world: GLTF,
		private camera: PerspectiveCamera,
		private renderer: WebGLRenderer,
	) {
		this.avatar = new AvatarObject3D(this.world.scene, this.camera);
		return this;
	}

	withCursorTracking() {

		const cursorTracker = new CursorTracker(this.renderer.domElement);

		cursorTracker.addEventListener('deltaToMouse', ({ data }) => {
			const { x, y } = data.clampScalar(-0.65, 0.65);
			this.avatar.setCursorRotation(new Vector3(-y, x, 0));
		});

		cursorTracker.addEventListener('mousePosition', ({ data }) => {
			this.avatar.setCursorPosition(data);
		});

		return this;
	}

	withFaceTracking() {

		const faceTracker = new FaceTracker();

		faceTracker.addEventListener('faceDetection', ({ data }) => {
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
