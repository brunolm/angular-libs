import { select } from '@angular-redux/store';
import { Injectable, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

// @dynamic
@Injectable({
  providedIn: 'root'
})
export class NgxReduxStatePropsService<T> implements OnDestroy {
  @select((state) => state)
  appState$: Observable<T>;

  appState: T = {} as any;

  private linkStateToProp: Subscription;

  constructor() {
    if (!this.appState$) {
      return;
    }

    this.linkStateToProp = this.appState$.subscribe((state = {} as any) => {
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
