import { SceneBuilder } from '../builders/scene.builder';
import { AvatarObject3D } from '../objects/avatar.object';

export class SceneFactory {

	constructor() {
		return this;
	}

	buildScene(avatar: AvatarObject3D) {
		return new SceneBuilder()
			.withAmbientLight()
			.withBackLight()
			.withFillLight()
			.withKeyLight()
			.withAvatar(avatar)
			.build();
	}

}
