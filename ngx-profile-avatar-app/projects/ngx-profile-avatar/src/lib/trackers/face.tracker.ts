import { EventDispatcher } from 'three';
import { AUPredictor, Subscription } from '@quarkworks-inc/avatar-webkit';

const FaceTrackerApiToken = '110546ae-627f-48d4-9cf8-fd8850e0ac7f';

export class FaceTracker extends EventDispatcher {

	predictor: AUPredictor;
	subscription: Subscription;

	constructor() {
		super();
	}

	start() {

		navigator.mediaDevices
			.getUserMedia({
				audio: false,
				video: { width: { ideal: 640 }, height: { ideal: 360 }, facingMode: 'user' }
			})
			.then(stream => {

				this.predictor = new AUPredictor({
					apiToken: FaceTrackerApiToken,
					shouldMirrorOutput: true
				});

				window['localStream'] = stream;

				this.predictor.start({ stream })
					.then(() => {

						this.subscription = this.predictor.dataStream.subscribe(data => {
							super.dispatchEvent({ type: 'faceDetection', data });
						});

					})
					.catch(console.error);

			})
			.catch(console.error);

	}

	stop() {
		this.predictor?.stop();
		this.subscription?.unsubscribe();
		window['localStream']?.getVideoTracks()[0]?.stop();
	}

}
