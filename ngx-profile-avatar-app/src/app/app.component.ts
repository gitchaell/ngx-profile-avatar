import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	url = 'https://d1a370nemizbjq.cloudfront.net/14ffadb0-f8ce-4d7c-aa0b-6d1dda85b694.glb';
	// url = 'https://d1a370nemizbjq.cloudfront.net/bdad8a36-075f-4e43-a8ae-45746a7f6a4e.glb';
        tracker = 'cursor';

	onLoadingAvatar({ loaded, total }: ProgressEvent) {
		console.log(`Loading : ${Math.round(loaded / total * 100)}%`);
	}
}
