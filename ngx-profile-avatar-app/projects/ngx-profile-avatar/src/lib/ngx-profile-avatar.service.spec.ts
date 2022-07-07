import { TestBed } from '@angular/core/testing';

import { NgxProfileAvatarService } from './ngx-profile-avatar.service';

describe('NgxProfileAvatarService', () => {
  let service: NgxProfileAvatarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxProfileAvatarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
