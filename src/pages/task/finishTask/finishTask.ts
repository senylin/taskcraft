import { Component, Inject } from '@angular/core';
import { IonicPage,App,MenuController,NavController, NavParams, AlertController } from 'ionic-angular';
import { LoginPage } from '../../login/login';
import { TaskPage } from '../task';
import { TimelinePage } from '../../timeline/timeline';

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
  pageBefore: any = TaskPage;
  date: any = '';
  constructor(public navCtrl: NavController, public navParams: NavParams,app: App,public menu: MenuController,
    @Inject('Store')public Store,public alertCtrl: AlertController, @Inject('TaskService')public TaskService) {
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
      this.task = navParams.get('task');
    }
    if (navParams.get('page') === 'TimelinePage') {
      this.pageBefore = TimelinePage;
    }
    if (navParams.get('date')) {
      this.date = navParams.get('date');
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TaskPage');
  }
  openMenu() {
   this.menu.open();
  }
  openLogin() {
    this.Store.setPerson(this.Store.user);
    this.navCtrl.popToRoot();
  }
  infinishTask() {
    this.task.id = this.task._id;
    this.task.taskStatus = 'done';
    this.task.finishTime = new Date(new Date().getTime()+8*60*60*1000).toISOString().substr(0,10);
    this.TaskService.editTask(this.task).subscribe(res => {
      if(res.data) {
        const alert = this.alertCtrl.create({
          title: '任务完成',
          subTitle: '',
          buttons: ['Ok']
        });
    
        alert.present();
        this.navCtrl.push(this.pageBefore, {
          date: this.date
        });
      } else {
        const alert = this.alertCtrl.create({
          title: '修改任务失败',
          subTitle: '请到后台查询原因!',
          buttons: ['Ok']
        });
    
        alert.present();
      }
    });
  }
}
