import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddTaskPage } from './addTask';

@NgModule({
  declarations: [
    AddTaskPage
  ],
  imports: [
    IonicPageModule.forChild(AddTaskPage),
  ],
})
export class AddTaskPageModule {}
