# ngx-redux-state-props

Service that grabs application state and expose on `state` and `state$`.

## Example

```ts
import { Component } from '@angular/core';
import { NgxReduxStatePropsService } from 'ngx-redux-state-props';

import { AppState } from '../app-state.model';
import { AboutActions } from './services/about.actions';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  constructor(private actions: AboutActions, private redux: NgxReduxStatePropsService<AppState>) {}

  get state() {
    return this.redux.appState && this.redux.appState.about;
  }

  testRedux() {
    this.actions.getApiValue();
  }

  getNasaApod() {
    this.actions.getNasaApod();
  }
}
```

Template:
```html
<div>
  <h2>About State</h2>
  <pre>{{ state | json }}</pre>
</div>
```