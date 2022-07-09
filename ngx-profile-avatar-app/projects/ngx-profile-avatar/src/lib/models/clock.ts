import { Clock } from 'three';

export class Clocker {


	clock: Clock

	constructor() {
		this.clock = new Clock();
	}

	get delta() {
		return this.clock.getDelta();
	}

}
