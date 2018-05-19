import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TimelinePage } from './timeline';
import { CalendarModule } from "ion2-calendar";

@NgModule({
  declarations: [
    TimelinePage,
  ],
  imports: [
    CalendarModule,
    IonicPageModule.forChild(TimelinePage),
  ]
})
export class TimelinePageModule {}
