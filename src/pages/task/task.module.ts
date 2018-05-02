import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TaskPage } from './task';
import { TaskService } from './task.service'

@NgModule({
  declarations: [
    TaskPage
  ],
  imports: [
    IonicPageModule.forChild(TaskPage),
  ],
  providers:[
    {provide:'TaskService',useClass:TaskService}
  ]
})
export class TaskPageModule {}
