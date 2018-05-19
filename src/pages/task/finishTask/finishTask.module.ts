import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FinishTaskPage } from './finishTask';

@NgModule({
  declarations: [
    FinishTaskPage
  ],
  imports: [
    IonicPageModule.forChild(FinishTaskPage),
  ],
})
export class FinishTaskPageModule {}
