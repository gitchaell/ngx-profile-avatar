export class Canvas {


	constructor(
		public element: HTMLCanvasElement
	) { }

	get width() {
		return this.element.clientWidth;
	}

	get height() {
		return this.element.clientHeight;
	}

	get aspect() {
		return this.width / this.height;
	}

}
