import { TestBed, inject } from '@angular/core/testing';

import { NgxReduxStatePropsService } from './ngx-redux-state-props.service';

describe('NgxReduxStatePropsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxReduxStatePropsService]
    });
  });

  it('should be created', inject([NgxReduxStatePropsService], (service: NgxReduxStatePropsService) => {
    expect(service).toBeTruthy();
  }));
});
