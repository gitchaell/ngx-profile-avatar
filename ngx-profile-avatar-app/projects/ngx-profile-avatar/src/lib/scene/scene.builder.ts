import { Scene, AmbientLight, DirectionalLight, SpotLight } from 'three';
import { AvatarObject3D } from '../avatar/avatar.object';

export class SceneBuilder {

	scene: Scene;
	ambientLight: AmbientLight;
	backLight: DirectionalLight;
	fillLight: DirectionalLight;
	keyLight: SpotLight;

	constructor() {
		this.scene = new Scene();
		return this;
	}

	withAmbientLight() {
		this.ambientLight = new AmbientLight(0x222222);
		this.ambientLight.intensity = 5;

		this.scene.add(this.ambientLight);
		return this;
	}

	withBackLight() {
		this.backLight = new DirectionalLight(0xffffff);
		this.backLight.position.set(-4.187, 0.839, -5.601);
		this.backLight.intensity = 4;

		this.scene.add(this.backLight);
		return this;
	}

	withFillLight() {
		this.fillLight = new DirectionalLight(0xffffff);
		this.fillLight.position.set(2.78, 0.942, 2.727);
		this.fillLight.intensity = 2;

		this.scene.add(this.fillLight);
		return this;
	}

	withKeyLight() {
		this.keyLight = new SpotLight(0xffffff);
		this.keyLight.position.set(-2.268, 2.076, 5);
		this.keyLight.intensity = 12;

		this.scene.add(this.keyLight);
		return this;
	}

	withAvatar(avatar: AvatarObject3D) {

		this.scene.add(avatar);

		if (this.backLight) this.backLight.target = avatar.head;
		if (this.keyLight) this.keyLight.target = avatar.head;
		if (this.fillLight) this.fillLight.target = avatar.head;

		return this;
	}

	build() {
		return this.scene;
	}
}
