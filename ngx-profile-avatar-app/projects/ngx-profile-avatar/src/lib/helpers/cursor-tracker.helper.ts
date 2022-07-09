import { Vector2, EventDispatcher } from 'three';
import { remap } from '../utils';

export class CursorTracker extends EventDispatcher {

	canvas: HTMLCanvasElement;
	lastClientPosition: Vector2;
	mousePosition: Vector2;

	constructor(canvas: HTMLCanvasElement) {
		super();
		this.canvas = canvas;
		this.lastClientPosition = this.getCanvasCenterPositionPx();
		this.mousePosition = this.getMousePosition();

		document.addEventListener('mousemove', this.onDocumentMouseMove.bind(this));
		document.addEventListener('scroll', this.onDocumentScroll.bind(this));
	}

	onDocumentMouseMove(event: MouseEvent) {

		event.preventDefault();

		const { clientX, clientY } = event;

		this.lastClientPosition = new Vector2(clientX, clientY);
		this.mousePosition = this.getMousePosition();

		this.getDeltaToMouse();
	}

	onDocumentScroll(_: Event) {
		this.mousePosition = this.getMousePosition();
		this.getDeltaToMouse();
	}

	getMousePosition() {

		const { x, y } = this.lastClientPosition;
		const { scrollX, scrollY, innerWidth, innerHeight } = window;

		const mouseX = ((x + scrollX) / innerWidth) * 2 - 1;
		const mouseY = -((y + scrollY) / innerHeight) * 2 + 1;

		const mousePosition = new Vector2(mouseX, mouseY);
		super.dispatchEvent({ type: 'mousePosition', data: mousePosition });

		return mousePosition;
	}

	getDeltaToMouse() {
		if (!this.mousePosition || !this.canvas) return;

		const canvasCenterPosition = this.getCanvasCenterPosition();
		const deltaToMouse = new Vector2();
		deltaToMouse.subVectors(this.mousePosition, canvasCenterPosition);
		super.dispatchEvent({ type: 'deltaToMouse', data: deltaToMouse });

		return deltaToMouse;
	}

	getCanvasCenterPosition() {

		const canvasPos = this.getCanvasCenterPositionPx();

		const centerX = remap({
			value: canvasPos.x,
			low1: 0,
			low2: -1,
			high1: window.innerWidth,
			high2: 1,
		});

		const centerY = -remap({
			value: canvasPos.y,
			low1: 0,
			low2: -1,
			high1: window.innerHeight,
			high2: 1,
		});

		return new Vector2(centerX, centerY);
	}

	getCanvasCenterPositionPx() {

		const { clientWidth, clientHeight } = this.canvas;
		const { left, top } = this.canvas.getBoundingClientRect();
		const { pageXOffset, pageYOffset } = window;

		const centerX = left + pageXOffset + clientWidth / 2;
		const centerY = top + pageYOffset + clientHeight / 2;

		return new Vector2(centerX, centerY);
	}

}
