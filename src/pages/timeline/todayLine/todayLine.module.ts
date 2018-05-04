import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TodayLinePage } from './todayLine';
import { CalendarModule } from "ion2-calendar";

@NgModule({
  declarations: [
    TodayLinePage,
  ],
  imports: [
    CalendarModule,
    IonicPageModule.forChild(TodayLinePage),
  ],
})
export class TodayLinePageModule {}
