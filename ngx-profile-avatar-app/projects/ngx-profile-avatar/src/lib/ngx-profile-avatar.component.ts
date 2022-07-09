import { Component, OnInit, AfterViewInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Clock } from 'three';
// Resolver
import { GLTFResolver } from './resolvers/gtlf.resolver';
// Factory
import { RendererFactory } from './factories/renderer.factory';
import { SceneFactory } from './factories/scene.factory';
import { CameraFactory } from './factories/camera.factory';
import { AvatarFactory } from './factories/avatar.factory';
import { ControlFactory } from './factories/control.factory';
// Object
import { AvatarObject3D } from './objects/avatar.object';
// Model
import { Canvas } from './models/canvas';


type AvatarTracker = 'cursor' | 'face';


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


	@Input() public set tracker(tracker: AvatarTracker) {
		this._tracker = tracker;
		this.main();
	}

	public get tracker(): AvatarTracker {
		return this._tracker;
	}

	private _tracker: AvatarTracker;


	private get canvas() {
		return this.canvasRef.nativeElement;
	}

	private get container() {
		return this.canvas.parentNode;
	}


	private main() {

		new GLTFResolver()
			.resolve(this.url)
			.then(world => {

				const canvas = new Canvas(this.canvas);

				const renderer = new RendererFactory(canvas).buildRenderer();

				const camera = new CameraFactory(canvas).buildCamera();

				const avatar = new AvatarFactory(renderer, world, camera).buildAvatar(this.tracker);

				const scene = new SceneFactory(avatar).buildScene();

				const control = new ControlFactory(camera, renderer).buildControl();

				const clock = new Clock();

				this.container.appendChild(renderer.domElement);

				(function render() {
					window.requestAnimationFrame(render);
					renderer.clear();
					renderer.render(scene, camera);
					scene.traverse((element: AvatarObject3D) => element?.update?.(clock.getDelta()));
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
