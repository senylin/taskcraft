import { Component, Inject } from '@angular/core';
import { IonicPage,App,MenuController,NavController, NavParams, AlertController } from 'ionic-angular';
import { LoginPage } from '../../login/login';
import { TaskPage } from '../task';

/**
 * Generated class for the TaskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addTask',
  templateUrl: 'addTask.html',
})
export class AddTaskPage {
  isEdit: boolean = false
  labs:Object = [];
  taskForm: any = {
    taskName: '',
    taskType: '',
    taskBefore: '',
    taskLimit: '',
    taskCondition: '',
    taskTime: '',
    taskWarn: false,
    taskPublic: false,
    taskPriority: 1
  }
  taskList: any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,app: App,public menu: MenuController,  public alertCtrl: AlertController,
    @Inject('TaskService')public TaskService) {
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
      this.taskForm = navParams.get('task');
      this.isEdit = true;
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
  createTask() {
    this.TaskService.createTask(this.taskForm).subscribe(res => {
      if(res.data) {
        const alert = this.alertCtrl.create({
          title: '添加成功',
          subTitle: '',
          buttons: ['Ok']
        });
    
        alert.present();
        this.navCtrl.push(TaskPage);
      } else {
        const alert = this.alertCtrl.create({
          title: '添加失败',
          subTitle: '请到后台查询原因!',
          buttons: ['Ok']
        });
    
        alert.present();
      }
    });
  }
}
