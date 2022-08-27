import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { AvatarData } from '../app.component';

@Component({
  selector: 'app-avatar-visor',
  template: `

    <div class="avatar-container">

      <ngx-profile-avatar class="avatar" [url]="data.url" [tracker]="data.tracker" [enableRotate]="data.enableRotate"
        [enableZoom]="data.enableZoom" (loading)="onLoading($event)">
      </ngx-profile-avatar>

      <div class="spinner-container" [class.hide]="!data.loading">
        <app-spinner></app-spinner>
      </div>

    </div>
  `,
  styles: [`

    div.avatar-container {
      position: relative;
      width: 100%;
      height: 100%;
      border-right: 1px solid var(--gray-600);
    }

    .avatar {
      display: flex;
      flex-grow: 1;
      width: 100%;
      height: 100%;
    }

    div.spinner-container {
      position: absolute;
      inset: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      visibility: visible;
      visibility: visible;
      transition: visibility 1s ease;
    }

    div.hide {
      visibility: hidden;
    }
  `],
})
export class AvatarVisorComponent implements OnInit, OnChanges {

  @Input() data: AvatarData;

  ngOnInit(): void {
  }

  ngOnChanges(): void {
  }

  onLoading({ loaded, total }: ProgressEvent) {

    const loadPercent = Math.round(loaded / total * 100);

    if (loadPercent >= 100)
      this.data.loading = false;
  }

}
