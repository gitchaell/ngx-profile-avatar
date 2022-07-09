import { Component, OnInit, AfterViewInit, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Clock } from 'three';
import {
	Tracker,
	GLTFResolver,
	Canvas,
	RendererFactory,
	CameraFactory,
	AvatarFactory,
	SceneFactory,
	ControlFactory,
	AvatarObject3D,
} from './index';


@Component({
	selector: 'ngx-profile-avatar',
	template: `
    <canvas #canvas id='canvas' style='width: 100%; height: 100%;'></canvas>`,
	styles: [`
    :host {
        width: 100vw;
        height: 100vh;
    }`]
})
export class NgxProfileAvatarComponent implements OnInit, AfterViewInit {

	@ViewChild('canvas') private canvasRef: ElementRef;

	@Input() public url: string;


	@Input() public set tracker(tracker: Tracker) {
		this._tracker = tracker;
		this.main();
	}

	public get tracker(): Tracker {
		return this._tracker;
	}

	private _tracker: Tracker;

	@Output() onLoading = new EventEmitter<ProgressEvent>();


	private get canvas() { return this.canvasRef.nativeElement; }

	private get container() { return this.canvas.parentNode; }

	private get GLTFResolver() { return new GLTFResolver(); }


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
