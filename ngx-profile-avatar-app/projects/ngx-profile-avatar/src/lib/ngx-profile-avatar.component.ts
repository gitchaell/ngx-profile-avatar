import { Component, OnInit, AfterViewInit, Input, ViewChild, ElementRef } from '@angular/core';
import { PerspectiveCamera, WebGLRenderer } from 'three';
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
// Input
import { AvatarInput, AvatarTracker } from './inputs/avatar.input';
// Model
import { Canvas } from './models/canvas';
import { Clocker } from './models/clock';


@Component({
	selector: 'ngx-profile-avatar',
	template: `
    <canvas #canvas id='canvas' style='height: 100vh; width: 100vw;'></canvas>`,
	styles: []
})
export class NgxProfileAvatarComponent implements OnInit, AfterViewInit {

	@ViewChild('canvas') private canvasRef: ElementRef;

	@Input() public url: string;
	@Input() public tracker: AvatarTracker;


	private async main() {

		const canvas = new Canvas(this.canvasRef.nativeElement);

		const renderer = new RendererFactory(canvas).buildRenderer();

		const world = await new GLTFResolver().resolve(this.url);

		const camera = new CameraFactory(canvas).buildCamera();

		const avatar = new AvatarFactory(renderer, world, camera).buildAvatar(new AvatarInput({ url: this.url, tracker: this.tracker }));

		const scene = new SceneFactory().buildScene(avatar);

		new ControlFactory(camera, renderer).buildControl();

		const clock = new Clocker();


		document.body.appendChild(renderer.domElement);

		(function render() {
			window.requestAnimationFrame(render);
			renderer.clear();
			renderer.render(scene, camera);
			scene.traverse((element: AvatarObject3D) => element?.update?.(clock.delta));
		}());

		this.createResizeHandler(renderer, camera);

	}

	private createResizeHandler(renderer: WebGLRenderer, camera: PerspectiveCamera) {
		function onResize() {
			const { clientWidth, clientHeight } = renderer.domElement;
			camera.aspect = clientWidth / clientHeight;
			camera.updateProjectionMatrix();
			renderer.setSize(clientWidth, clientHeight);
		}

		window.addEventListener('resize', onResize);
	};


	constructor() { }

	ngOnInit() { }

	async ngAfterViewInit() {
		await this.main();
	}

}
