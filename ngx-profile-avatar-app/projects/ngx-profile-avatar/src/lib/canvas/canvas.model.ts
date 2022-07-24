export class Canvas {

	constructor(
		public canvas: HTMLCanvasElement,
		public wrapper: HTMLElement,
	) { }

	parse(data: string): number {
		return window.parseFloat(data.replace('px', ''));
	}

	get width() {
		const { width } = window.getComputedStyle(this.wrapper);
		return this.parse(width);
	};

	get height() {
		const { height } = window.getComputedStyle(this.wrapper);
		return this.parse(height);
	}

	get aspect() {
		return this.width / this.height;
	}

}