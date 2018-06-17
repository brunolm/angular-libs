import { NgModule } from '@angular/core';
import { NgxReduxStatePropsService } from './ngx-redux-state-props.service';
import { NgxReduxStatePropsComponent } from './ngx-redux-state-props.component';

@NgModule({
  imports: [],
  declarations: [NgxReduxStatePropsComponent],
  providers: [NgxReduxStatePropsService],
  exports: [NgxReduxStatePropsComponent],
})
export class NgxReduxStatePropsModule {}
