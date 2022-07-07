import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Library
import { NgxProfileAvatarModule } from '../../projects/ngx-profile-avatar/src/lib/ngx-profile-avatar.module';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		NgxProfileAvatarModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
