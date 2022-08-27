import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

import { Tracker } from '@michaelldev/ngx-profile-avatar/lib';

export class AvatarData {
  url: string;
  tracker: Tracker;
  enableRotate: boolean;
  enableZoom: boolean;
  loading: boolean;

  constructor({
    url,
    tracker,
    enableRotate = false,
    enableZoom = false,
    loading = true,
  }: Partial<AvatarData>) {

    this.update({ url, tracker, enableRotate, enableZoom, loading });
  }

  update({
    url,
    tracker,
    enableRotate,
    enableZoom,
    loading,
  }: Partial<AvatarData>) {

    this.url = url;
    this.tracker = tracker;
    this.enableRotate = enableRotate;
    this.enableZoom = enableZoom;
    this.loading = loading;
  }
}


@Component({
  selector: 'app-root',
  template: `

    <app-avatar-visor class="men-avatar" [data]="men"></app-avatar-visor>
    <app-avatar-form class="men-form" [data]="men" (submit)="onUpdateMen($event)"></app-avatar-form>

    <app-avatar-visor class="women-avatar" [data]="women"></app-avatar-visor>
    <app-avatar-form class="women-form" [data]="women" (submit)="onUpdateWomen($event)"></app-avatar-form>
  `,
  styles: [`
    :host {
      display: grid;
      grid-template-columns: 50vw 50vw;
      grid-template-rows: 1fr auto;
      grid-template-areas:
      "men-avatar women-avatar"
      "men-form women-form";
      width: 100%;
      height: 100vh;
    }

    .men-avatar { grid-area: men-avatar; }
    .women-avatar { grid-area: women-avatar; }
    .women-form { grid-area: women-form; }
    .men-form { grid-area: men-form; }

    @media only screen and (max-width: 600px) {
      :host {
        grid-template-columns: 100vw;
        grid-template-rows: 65vh auto 65vh auto;
        grid-template-areas:
          "men-avatar"
          "men-form"
          "women-avatar"
          "women-form";
        height: auto;
      }
    }
  `]
})
export class AppComponent implements OnInit {

  men = new AvatarData({ url: environment.menURL, tracker: 'cursor' });
  women = new AvatarData({ url: environment.womenURL, tracker: 'cursor' });

  constructor() { }

  ngOnInit(): void { }

  onUpdateMen(data: AvatarData) {
    this.men.update(data);
  }

  onUpdateWomen(data: AvatarData) {
    this.women.update(data);
  }

}
