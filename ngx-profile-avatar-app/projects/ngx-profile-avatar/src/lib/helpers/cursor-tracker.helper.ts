import { Vector2, EventDispatcher, Vector3 } from 'three';
import { remap } from '../utils';

export class CursorTracker extends EventDispatcher {

	lastCursorPosition: Vector2;
	cursorPosition: Vector2;
	cursorRotation: Vector2;


	constructor(
		private canvas: HTMLCanvasElement
	) {
		super();
		this.lastCursorPosition = this.getCenterPositionPx();
		this.cursorPosition = this.getCursorPosition();
	}


	public start() {
		this.canvas.addEventListener('mousemove', this.onMouseMove);
		this.canvas.addEventListener('scroll', this.onScroll);
	}

	public stop() {
		this.canvas.removeEventListener('mousemove', this.onMouseMove);
		this.canvas.removeEventListener('scroll', this.onScroll);
	}


	private onMouseMove = (event: MouseEvent) => {
		event.preventDefault();
		const { clientX, clientY } = event;

		this.lastCursorPosition = new Vector2(clientX, clientY);
		this.cursorPosition = this.getCursorPosition();
		this.cursorRotation = this.getCursorRotation();
	};

	private onScroll = () => {
		this.cursorPosition = this.getCursorPosition();
		this.cursorRotation = this.getCursorRotation();
	};


	private getCursorPosition() {

		const { x, y } = this.lastCursorPosition;
		const { scrollX, scrollY, innerWidth, innerHeight } = window;

		const cursorX = ((x + scrollX) / innerWidth) * 2 - 1;
		const cursorY = -((y + scrollY) / innerHeight) * 2 + 1;

		const data = new Vector2(cursorX, cursorY);

		this.dispatchEvent({ type: 'cursorPosition', data });

		return data;
	}


	private getCursorRotation() {

		if (!this.cursorPosition || !this.canvas) return;

		const canvasCenterPosition = this.getCenterPosition();

		const data = new Vector2();
		data.subVectors(this.cursorPosition, canvasCenterPosition);

		const { x, y } = data.clampScalar(-0.65, 0.65);
		const dataClamp = new Vector3(-y, x, 0);

		this.dispatchEvent({ type: 'cursorRotation', data: dataClamp });

		return data;
	}


	private getCenterPosition() {

		const canvasPos = this.getCenterPositionPx();

		const centerX = remap({ 'value': canvasPos.x, 'low1': 0, 'low2': -1, 'high1': window.innerWidth, 'high2': 1 });
		const centerY = -remap({ 'value': canvasPos.y, 'low1': 0, 'low2': -1, 'high1': window.innerHeight, 'high2': 1 });

		return new Vector2(centerX, centerY);
	}


	private getCenterPositionPx() {

		const { width, height } = this.canvas;
		const { left, top } = this.canvas.getBoundingClientRect();
		const { pageXOffset, pageYOffset } = window;

		const centerX = left + pageXOffset + width / 2;
		const centerY = top + pageYOffset + height / 2;

		return new Vector2(centerX, centerY);
	}

}
