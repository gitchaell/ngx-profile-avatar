import { Component, OnInit, AfterViewInit, Input, ViewChild, ElementRef, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Clock } from 'three';
import {
	Tracker,
	AvatarObject3D,
	Canvas,
	RendererFactory,
	CameraFactory,
	AvatarFactory,
	SceneFactory,
	ControlFactory,
	GLTFResolver,
} from './index';

@Component({
	selector: 'ngx-profile-avatar',
	template: `
    <canvas #canvas></canvas>`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxProfileAvatarComponent implements OnInit, AfterViewInit {

	@ViewChild('canvas')
	private canvasRef: ElementRef<HTMLCanvasElement>;

	private _tracker: Tracker;

	@Input()
	public set tracker(tracker: Tracker) {
		this._tracker = tracker;
		this.main();
	}

	public get tracker() {
		return this._tracker;
	}

	private _url: string;

	@Input()
	public set url(url: string) {
		this._url = url;
		this.GLTFResolver.clean();
		this.main();
	}

	public get url() {
		return this._url;
	}


	@Output() loading = new EventEmitter<ProgressEvent>();

	private GLTFResolver = new GLTFResolver();


	private get canvas(): HTMLCanvasElement {
		return this.canvasRef.nativeElement;
	}

	private get wrapper(): HTMLElement {
		return this.canvas.parentElement;
	}


	private main() {

		this.GLTFResolver.resolve(this.url, this.loading)
			.then(world => {

				const canvas = new Canvas(this.canvas, this.wrapper);

				const renderer = new RendererFactory(canvas).buildRenderer();

				const camera = new CameraFactory(canvas).buildCamera();

				const avatar = new AvatarFactory(renderer, world, camera).buildAvatar(this.tracker, this.loading);

				const scene = new SceneFactory(avatar).buildScene();

				const control = new ControlFactory(camera, renderer).buildControl();

				const clock = new Clock();

				this.wrapper.appendChild(renderer.domElement);

				const self = this;

				(function render() {
					window.requestAnimationFrame(render);
					renderer.clear();
					renderer.render(scene, camera);
					scene.traverse((element: AvatarObject3D) => element?.update?.(clock.getDelta(), self.tracker));
				}());

				window.addEventListener('resize', () => {
					camera.aspect = canvas.aspect;
					camera.updateProjectionMatrix();
					control.update();
					renderer.setSize(canvas.width, canvas.height, true);
				});

			})
			.catch(console.error);
	}


	constructor() { }

	ngOnInit() { }

	ngAfterViewInit() {
		this.main();
	}

}
