import { AvatarObject3D } from "../avatar/avatar.object";
import { SceneBuilder } from "./scene.builder";

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
