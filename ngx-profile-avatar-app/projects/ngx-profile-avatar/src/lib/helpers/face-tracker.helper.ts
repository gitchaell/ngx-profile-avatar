import { EventDispatcher } from 'three';
import { AUPredictor, Subscription } from '@quarkworks-inc/avatar-webkit';

const API_TOKEN = '110546ae-627f-48d4-9cf8-fd8850e0ac7f';

export class FaceTracker extends EventDispatcher {

	predictor: AUPredictor;
	subscription: Subscription;
	stream: MediaStream;
	videoAllowed: boolean = false;

	constructor() {
		super();
		this.predictor = new AUPredictor({ apiToken: API_TOKEN, shouldMirrorOutput: true });
		this.start();
	}

	async requestVideo() {

		if (this.videoAllowed) return;

		this.stream = await navigator.mediaDevices.getUserMedia({
			audio: false,
			video: {
				width: { ideal: 640 },
				height: { ideal: 360 },
				facingMode: 'user'
			}
		});

		this.videoAllowed = true;

	}

	async start() {

		await this.requestVideo();

		this.subscription = this.predictor.dataStream.subscribe(data => {
			super.dispatchEvent({ type: 'faceDetection', data });
		});

		this.predictor.start({ stream: this.stream });

	}

	stop() {
		this.predictor.stop();
		this.subscription?.unsubscribe();
	}

}
