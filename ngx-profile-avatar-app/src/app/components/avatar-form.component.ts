import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AvatarData } from '../app.component';

@Component({
  selector: 'app-avatar-form',
  template: `

    <form [formGroup]="formGroup" (ngSubmit)="onSubmit()">

      <div>

        <div class="form-item">
          <label for="url" class="form-label"> URL </label>
          <input type="url" id="url" class="form-control" formControlName="url"
            placeholder="Enter your 3d avatar URL generated from ReadyPlayerMe" required="true">
        </div>

      </div>

      <div>

        <div class="form-item">
          <label for="tracker" class="form-label">Tracker</label>
          <select id="tracker" class="form-control" formControlName="tracker" required="true">
            <option value="cursor">Cursor</option>
            <option value="face">Face</option>
          </select>
        </div>

        <div class="form-item">
          <label for="rotation" class="form-label">Rotation</label>
          <select id="rotation" class="form-control" formControlName="enableRotate" required="true">
            <option value="true">Enable</option>
            <option value="false">Disable</option>
          </select>
        </div>

        <div class="form-item">
          <label for="zoom" class="form-label">Zoom</label>
          <select id="zoom" class="form-control" formControlName="enableZoom" required="true">
            <option value="true">Enable</option>
            <option value="false">Disable</option>
          </select>
        </div>

      </div>

      <div>
        <button type="submit" class="button">Apply</button>
      </div>

    </form>
  `,
  styles: [`

    :host {
      padding: 1rem 2rem;
      border-right: 1px solid var(--gray-600);
    }

    form > div:nth-child(1) {
        display: flex;
    }

    form > div:nth-child(2) {
      display: flex;
      gap: 1rem;
    }

    form > div:nth-child(3) {
      display: flex;
      justify-content: end;
    }

    @media only screen and (max-width: 600px) {

      form > div:nth-child(2) {
        display: flex;
        flex-direction: column;
      }
    }
  `],
})
export class AvatarFormComponent implements OnInit {

  @Input() data: AvatarData;

  @Output() change = new EventEmitter<AvatarData>();

  formGroup: FormGroup;


  ngOnInit(): void {

    this.formGroup = new FormGroup({
      url: new FormControl(this.data.url, [Validators.required]),
      tracker: new FormControl(this.data.tracker, [Validators.required]),
      enableRotate: new FormControl(this.data.enableRotate, [Validators.required]),
      enableZoom: new FormControl(this.data.enableZoom, [Validators.required]),
    });
  }

  onSubmit() {

    if (!this.formGroup.valid) alert('Error. Please, complete form');

    this.formGroup.get('enableRotate').setValue(
      this.formGroup.get('enableRotate').value === 'true');

    this.formGroup.get('enableZoom').setValue(
      this.formGroup.get('enableZoom').value === 'true');

    this.change.emit({
      ...this.formGroup.value,
      loading: this.formGroup.get('url').value !== this.data.url
    });
  }

}
