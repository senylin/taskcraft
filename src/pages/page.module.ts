import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { LoginPageModule } from '../pages/login/login.module';
import { TaskPageModule } from '../pages/task/task.module';
import { AddTaskPageModule } from '../pages/task/addTask/addTask.module';
import { TimelinePageModule } from '../pages/timeline/timeline.module';

@NgModule({
  imports: [
    LoginPageModule,
    TaskPageModule,
    TimelinePageModule,
    AddTaskPageModule
  ]
})
export class PageModule {}
