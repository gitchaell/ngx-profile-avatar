import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	url = 'assets/michaell.avatar.glb';
	tracker = 'cursor';

	onLoadingAvatar({ loaded, total }: ProgressEvent) {
		console.log(`${this.url} - Loading : ${Math.round(loaded / total * 100)}%`);
	}
}
