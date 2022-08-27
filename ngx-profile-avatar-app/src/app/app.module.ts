import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { SpinnerComponent } from './components/spinner.component';
import { AvatarVisorComponent } from './components/avatar-visor.component';

// Library
import { NgxProfileAvatarModule } from '@michaelldev/ngx-profile-avatar';
import { AvatarFormComponent } from './components/avatar-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    AvatarVisorComponent,
    AvatarFormComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxProfileAvatarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
