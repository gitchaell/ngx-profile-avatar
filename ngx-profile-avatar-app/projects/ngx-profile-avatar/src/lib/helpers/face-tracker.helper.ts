import { EventDispatcher } from 'three';
import { AUPredictor, Subscription } from '@quarkworks-inc/avatar-webkit';

const API_TOKEN = '110546ae-627f-48d4-9cf8-fd8850e0ac7f';

export class FaceTracker extends EventDispatcher {

	predictor: AUPredictor;
	subscription: Subscription;

	constructor() {
		super();
		this.predictor = new AUPredictor({ apiToken: API_TOKEN, shouldMirrorOutput: true });
		this.stop();
		this.setUserMediaAccesor();
	}

	setUserMediaAccesor() {

		if (navigator.mediaDevices.getUserMedia === undefined) {

			navigator.mediaDevices.getUserMedia = function (constraints) {

				const getUserMedia = navigator['webkitGetUserMedia'] || navigator['mozGetUserMedia'];

				if (!getUserMedia) {
					return Promise.reject(new Error('getUserMedia is not implemented in this browser'));
				}

				return new Promise(function (resolve, reject) {
					getUserMedia.call(navigator, constraints, resolve, reject);
				});
			}
		}
	}

	start() {

		navigator.mediaDevices
			.getUserMedia({
				audio: false,
				video: { width: { ideal: 640 }, height: { ideal: 360 }, facingMode: 'user' }
			})
			.then(stream => {

				window['localStream'] = stream;

				this.predictor.start({ stream }).then(() => {

					this.subscription = this.predictor.dataStream.subscribe(data => {
						super.dispatchEvent({ type: 'faceDetection', data });
					});

				});


			})
			.catch(console.error);

	}

	stop() {
		this.predictor?.stop();
		this.subscription?.unsubscribe();
		window['localStream']?.getVideoTracks()[0]?.stop();
	}

}
