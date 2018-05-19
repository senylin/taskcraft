import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { LoginPageModule } from './login/login.module';
import { TaskPageModule } from './task/task.module';
import { AddTaskPageModule } from './task/addTask/addTask.module';
import { FinishTaskPageModule } from './task/finishTask/finishTask.module';
import { TimelinePageModule } from './timeline/timeline.module';
import { PlatformPageModule } from './platform/platform.module';
import { AssistPageModule } from './platform/assist/assist.module';
import { LogPageModule } from './platform/log/log.module';
import { TodayLinePageModule } from './timeline/todayLine/todayLine.module';
import { CalendarModule } from "ion2-calendar";
import { TaskService } from './task/task.service';
import { TimelineService } from './timeline/timeline.service';
import { PlatformService } from './platform/platform.service';
import { LoginService } from './login/login.service';

@NgModule({
  imports: [
    LoginPageModule,
    TaskPageModule,
    TimelinePageModule,
    AddTaskPageModule,
    FinishTaskPageModule,
    TodayLinePageModule,
    PlatformPageModule,
    AssistPageModule,
    LogPageModule,
    CalendarModule
  ],
  providers:[
    { provide:'TaskService',useClass:TaskService },
    { provide:'TimelineService',useClass:TimelineService },
    { provide:'PlatformService',useClass:PlatformService },
    { provide:'LoginService',useClass:LoginService },
  ]
})
export class PageModule {}
