import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxProfileAvatarComponent } from './ngx-profile-avatar.component';

describe('NgxProfileAvatarComponent', () => {
  let component: NgxProfileAvatarComponent;
  let fixture: ComponentFixture<NgxProfileAvatarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxProfileAvatarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxProfileAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
