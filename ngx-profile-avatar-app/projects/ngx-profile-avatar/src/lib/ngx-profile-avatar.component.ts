import { Component, OnInit, AfterViewInit, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
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
    <canvas #canvas id="canvas" [ngStyle]="{ 'width': width, 'height': height }"></canvas>`,
})
export class NgxProfileAvatarComponent implements OnInit, AfterViewInit {

	@ViewChild('canvas')
	private canvasRef: ElementRef;

	@Input()
	public width: string = '100vw';

	@Input()
	public height: string = '100vh';

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


	@Output() onLoading = new EventEmitter<ProgressEvent>();

	private GLTFResolver = new GLTFResolver();

	private get canvas() { return this.canvasRef.nativeElement; }

	private get container() { return this.canvas.parentNode; }



	private main() {

		this.GLTFResolver.resolve(this.url, this.onLoading)
			.then(world => {

				const canvas = new Canvas(this.canvas);

				const renderer = new RendererFactory(canvas).buildRenderer();

				const camera = new CameraFactory(canvas).buildCamera();

				const avatar = new AvatarFactory(renderer, world, camera).buildAvatar(this.tracker);

				const scene = new SceneFactory(avatar).buildScene();

				const control = new ControlFactory(camera, renderer).buildControl();

				const clock = new Clock();

				this.container.appendChild(renderer.domElement);

				const component = this;

				(function render() {
					window.requestAnimationFrame(render);
					renderer.clear();
					renderer.render(scene, camera);
					scene.traverse((element: AvatarObject3D) => element?.update?.(clock.getDelta(), component.tracker));
				}());

				window.addEventListener('resize', () => {
					camera.aspect = canvas.aspect;
					camera.updateProjectionMatrix();
					control.update();
					renderer.setSize(canvas.width, canvas.height);
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
