import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TaskPage } from './task';
import { TaskService } from './task.service';
import { TimelineService } from '../timeline/timeline.service';

@NgModule({
  declarations: [
    TaskPage
  ],
  imports: [
    IonicPageModule.forChild(TaskPage),
  ],
  // providers:[
  //   {provide:'TaskService',useClass:TaskService},
  //   {provide:'TimelineService',useClass:TimelineService}
  // ]
})
export class TaskPageModule {}
