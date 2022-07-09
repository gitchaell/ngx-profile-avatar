import { WebGLRenderer, PerspectiveCamera } from 'three';
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
		this.cursorTracker.stop();
		this.cursorTracker.removeEventListener('cursorRotation', this.onCursorPosition);
		this.cursorTracker.removeEventListener('cursorPosition', this.onCursorRotation);

		this.faceTracker = new FaceTracker();
		this.faceTracker.stop();
		this.faceTracker.removeEventListener('faceDetection', this.onFaceDetection);

		return this;
	}

	private onCursorPosition = ({ data }: any) => this.avatar.setCursorRotation(data);
	private onCursorRotation = ({ data }: any) => this.avatar.setCursorPosition(data);

	public withCursorTracking() {

		this.cursorTracker.start();
		this.cursorTracker.addEventListener('cursorRotation', this.onCursorPosition);
		this.cursorTracker.addEventListener('cursorPosition', this.onCursorRotation);

		return this;
	}


	private onFaceDetection = ({ data }: any) => {
		this.avatar.setFaceExpressions(data.blendShapes);
		this.avatar.setFaceRotation(data.rotation);
		this.avatar.setFaceTransform(data.transform);
	};

	withFaceTracking() {

		this.faceTracker.start();
		this.faceTracker.addEventListener('faceDetection', this.onFaceDetection);

		return this;
	}


	build() {
		return this.avatar;
	}

}
