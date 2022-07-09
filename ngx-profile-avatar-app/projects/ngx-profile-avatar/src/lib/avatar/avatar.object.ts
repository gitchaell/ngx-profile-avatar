import { AnimationMixer, Group, Mesh, Object3D, Vector3, Vector2, PerspectiveCamera } from 'three';
import { BlendShapeKeys, BlendShapes, Rotation, Transform } from '@quarkworks-inc/avatar-webkit';
import { Tracker } from '../trackers/tracker.type';
import { mapRange } from '../utils/map-range.util';
import { lerp } from '../utils/lerp.util';


export class AvatarObject3D extends Object3D {

	proxy: Group;

	root: Mesh;
	head: Mesh;
	eye: { left?: Mesh; right?: Mesh; };
	neck: Mesh;
	hand: { left?: Mesh; right?: Mesh; };

	mixer: AnimationMixer;

	cursorPosition: Vector2;
	cursorRotation: Vector3;

	faceExpressions: BlendShapes;
	faceRotation: Rotation;
	faceTransform: Transform;

	eyeLeftRotation = new Vector3(-1.5489931179359278, 5.002408635515016e-7, 3.141592528749793);
	eyeRightRotation = new Vector3(-1.548993618155872, 2.618223344326663e-7, 3.1415925287497273);


	constructor(
		private scene: Group,
		private camera: PerspectiveCamera
	) {
		super();

		this.proxy = new Proxy(this.scene, {
			get: (group: Group, prop: string) => prop in group ? group[prop] : group.getObjectByName(prop),
		});

		this.root = this.proxy['Wolf3D_Avatar'] || this.proxy['Wolf3D_Head'];

		this.head = this.proxy['Head'];
		this.neck = this.proxy['Neck'];

		this.hand = {};

		this.hand.right = this.proxy['RightHand'];
		this.hand.right.visible = false;
		this.hand.right.scale.set(0, 0, 0);

		this.hand.left = this.proxy['LeftHand'];
		this.hand.left.visible = false;
		this.hand.left.scale.set(0, 0, 0);

		this.eye = {};

		this.eye.right = this.proxy['RightEye'];
		this.eye.left = this.proxy['LeftEye'];

		this.position.set(0, 0, 0);

		this.mixer = new AnimationMixer(this.proxy);
		this.mixer.timeScale = 0.5;

		this.add(this.proxy);
	}


	setCursorRotation(cursorRotation: Vector3) {
		this.cursorRotation = cursorRotation;
	}

	setCursorPosition(cursorPosition: Vector2) {
		this.cursorPosition = cursorPosition;
	}


	setFaceExpressions(faceExpressions: BlendShapes) {
		this.faceExpressions = faceExpressions;
	}

	setFaceRotation(faceRotation: Rotation) {
		this.faceRotation = faceRotation;
	}

	setFaceTransform(faceTranform: Transform) {
		this.faceTransform = faceTranform;
	}



	update(delta: number, tracker: Tracker) {
		if (tracker === 'cursor') this.trackCursor();
		if (tracker === 'face') this.trackFace();
		this.mixer.update(delta);
	}


	rad: number = Math.PI / 180;
	eyeRotationOffsetX: number = 90 * this.rad;
	targetPos: Vector2 = new Vector2(0, 0);
	currentPos: Vector2 = new Vector2(0, 0);

	setCurrentPos = () => {

		const { x, y } = this.cursorPosition;

		const cameraRotation = Math.abs(this.camera.rotation.z);

		if (cameraRotation < 0.2) {
			this.targetPos.x = mapRange({ 'value': y, 'inMin': -1, 'inMax': 1, 'outMin': 5 * this.rad, 'outMax': -5 * this.rad });
			this.targetPos.y = mapRange({ 'value': x, 'inMin': -1, 'inMax': 1, 'outMin': -10 * this.rad, 'outMax': 10 * this.rad });
		} else {
			this.targetPos.set(0, 0);
		}

		this.currentPos.x = lerp({ 'start': this.currentPos.x, 'end': this.targetPos.x });
		this.currentPos.y = lerp({ 'start': this.currentPos.y, 'end': this.targetPos.y });

	}

	setHeadRotation = () => {
		const { x, y } = this.cursorRotation;
		this.head.rotation.set(x, y, 0);
		// this.head.rotation.x = this.currentPos.x * 2;
		// this.head.rotation.y = this.currentPos.y * 2;
	}

	setNeckRotation = () => {
		this.neck.rotation.x = this.currentPos.x + 0.1;
		this.neck.rotation.y = this.currentPos.y;
	}

	setEyeRotation = () => {
		this.eye.right.rotation.x = this.currentPos.x - this.eyeRotationOffsetX;
		this.eye.left.rotation.x = this.currentPos.x - this.eyeRotationOffsetX;
		this.eye.right.rotation.z = this.currentPos.y * 3 + Math.PI;
		this.eye.left.rotation.z = this.currentPos.y * 3 + Math.PI;
	}

	resetEyeRotation = () => {
		this.eye.left.rotation.setFromVector3(this.eyeLeftRotation);
		this.eye.right.rotation.setFromVector3(this.eyeRightRotation);
	}


	trackCursor() {

		if (!this.cursorPosition || !this.cursorRotation) return;

		this.setCurrentPos();

		this.setHeadRotation();
		this.setNeckRotation();
		this.setEyeRotation();

	}

	trackFace() {

		if (!this.faceExpressions || !this.faceRotation || !this.faceTransform) return;

		this.resetEyeRotation();

		Object.entries(this.faceExpressions).forEach(([key, value]) => {
			const arKitKey = BlendShapeKeys.toARKitConvention(key);
			const index = this.root.morphTargetDictionary[arKitKey];
			this.root.morphTargetInfluences[index] = value;
		});

		const { pitch, yaw, roll } = this.faceRotation;
		this.head.rotation.set(-pitch, yaw, roll);

		const { x, y } = this.faceTransform;
		this.position.set(x, y * 0.5, 0);

	}

}
