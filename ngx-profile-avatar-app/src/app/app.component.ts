import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	tracker = 'cursor';

	onLoadingAvatar({ loaded, total }: ProgressEvent) {
		console.log(`Loading : ${Math.round(loaded / total * 100)}%`);
	}
}
