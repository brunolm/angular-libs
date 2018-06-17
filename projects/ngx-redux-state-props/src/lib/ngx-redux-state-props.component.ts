import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { NgxReduxStatePropsService } from './ngx-redux-state-props.service';

@Component({
  selector: 'lib-ngx-redux-state-props',
  template: '',
})
export class NgxReduxStatePropsComponent {
  constructor(private redux: NgxReduxStatePropsService) {}

  get state() {
    return this.redux.appState;
  }

  get state$(): Observable<any> {
    return this.redux.appState$;
  }
}
