export type AvatarTracker = 'Cursor' | 'Face';

export class AvatarInput {

	url: string;
	tracker?: AvatarTracker;

	constructor({ url, tracker = 'Cursor' }: AvatarInput) {
		this.url = url;
		this.tracker = tracker;
	}

}