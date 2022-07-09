export type AvatarTracker = 'cursor' | 'face';

export class AvatarInput {

	url: string;
	tracker?: AvatarTracker;

	constructor({ url, tracker = 'cursor' }: AvatarInput) {
		this.url = url;
		this.tracker = tracker;
	}

}