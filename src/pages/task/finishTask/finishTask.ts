import { Component } from '@angular/core';
import { IonicPage,App,MenuController,NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../../login/login';

/**
 * Generated class for the TaskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-finishTask',
  templateUrl: 'finishTask.html',
})
export class FinishTaskPage {
  labs:Object = [];
  task: any = {
    taskName: '',
    taskType: '',
    taskBefore: '',
    taskLimit: '',
    taskCondition: '',
    taskTime: '',
    taskWarn: false,
    taskPublic: false,
    taskPriority: 1,
    taskResult: ''
  }
  taskList: any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,app: App,public menu: MenuController) {
    menu.enable(true);
    this.labs = [
      {
        name:'hello'
      },
      {
        name:'world'
      },
      {
        name:'peace'
      }
    ]
    if (navParams.get('task')) {
      console.log(navParams.get('task'))
      this.task = navParams.get('task');
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TaskPage');
  }
  openMenu() {
   this.menu.open();
  }
  openLogin() {
    this.navCtrl.push(LoginPage);
  }
}
