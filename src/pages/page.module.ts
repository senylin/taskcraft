import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { LoginPageModule } from '../pages/login/login.module';
import { TaskPageModule } from '../pages/task/task.module';
import { AddTaskPageModule } from '../pages/task/addTask/addTask.module';
import { FinishTaskPageModule } from '../pages/task/finishTask/finishTask.module';
import { TimelinePageModule } from '../pages/timeline/timeline.module';
import { TodayLinePageModule } from '../pages/timeline/todayLine/todayLine.module';
import { CalendarModule } from "ion2-calendar";
import { TaskService } from './task/task.service';
import { TimelineService } from './timeline/timeline.service';


@NgModule({
  imports: [
    LoginPageModule,
    TaskPageModule,
    TimelinePageModule,
    AddTaskPageModule,
    FinishTaskPageModule,
    TodayLinePageModule,
    CalendarModule
  ],
  providers:[
    {provide:'TaskService',useClass:TaskService},
    {provide:'TimelineService',useClass:TimelineService}
  ]
})
export class PageModule {}
