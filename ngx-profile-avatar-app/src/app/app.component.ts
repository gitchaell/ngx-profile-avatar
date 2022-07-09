import { Component } from '@angular/core';
import { AvatarTracker } from 'projects/ngx-profile-avatar/src/public-api';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	tracker: AvatarTracker = 'cursor';
}
