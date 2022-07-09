import { SceneBuilder } from '../builders/scene.builder';
import { AvatarObject3D } from '../objects/avatar.object';

export class SceneFactory {

	constructor(private avatar: AvatarObject3D) {
		return this;
	}

	buildScene() {
		return new SceneBuilder()
			.withAmbientLight()
			.withBackLight()
			.withFillLight()
			.withKeyLight()
			.withAvatar(this.avatar)
			.build();
	}

}
