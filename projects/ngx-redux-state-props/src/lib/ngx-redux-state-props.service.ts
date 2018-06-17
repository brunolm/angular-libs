import { select } from '@angular-redux/store';
import { Injectable, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

// @dynamic
@Injectable({
  providedIn: 'root'
})
export class NgxReduxStatePropsService implements OnDestroy {
  @select((state) => state)
  appState$: Observable<any>;

  appState: any = {};

  private linkStateToProp: Subscription;

  constructor() {
    if (!this.appState$) {
      return;
    }

    this.linkStateToProp = this.appState$.subscribe((state = {}) => {
      this.appState = state;
    });
  }

  ngOnDestroy() {
    if (!this.appState$) {
      return;
    }

    this.linkStateToProp.unsubscribe();
  }
}
