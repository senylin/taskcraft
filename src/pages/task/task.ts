import { Component, Inject } from '@angular/core';
import { IonicPage, App, MenuController, NavController, NavParams, AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AddTaskPage } from './addTask/addTask';
import { FinishTaskPage } from './finishTask/finishTask';

/**
 * Generated class for the TaskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-task',
  templateUrl: 'task.html',
})
export class TaskPage {
  selectedSegment: any = 'person'
  showFinish: boolean = false
  segmentList: any = [
    {
      Name: 'person',
      title: 'person'
    },
    {
      Name: 'work',
      title: 'work'
    },
    {
      Name: 'business',
      title: 'business'
    },
    {
      Name: 'study',
      title: 'study'
    },
    {
      Name: 'travel',
      title: 'travel'
    }
  ]
  taskList: any = [
  ]
  taskDoneList: any = [
  ]
  queryText: string = ''
  constructor(public navCtrl: NavController, public navParams: NavParams,app: App, public menu: MenuController, public alertCtrl: AlertController,@Inject('Config')public Config,
    @Inject('TaskService')public TaskService) {
    menu.enable(true);
    this.TaskService.getTaskList({taskType: this.selectedSegment, taskStatus: 'doing'}).subscribe(res => {
      console.log(res);
      this.taskList = res.data;
    });
    this.TaskService.getTaskList({taskType: this.selectedSegment, taskStatus: 'done'}).subscribe(res => {
      console.log(res);
      this.taskDoneList = res.data;
    });
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
  showToggle() {
    this.showFinish = !this.showFinish;
  }
  searchTask() {
    this.TaskService.getTaskList({taskName: this.queryText,taskType: this.selectedSegment, taskStatus: 'doing'}).subscribe(res => {
      console.log(res);
      this.taskList = res.data;
    });
    this.TaskService.getTaskList({taskName: this.queryText,taskType: this.selectedSegment, taskStatus: 'done'}).subscribe(res => {
      console.log(res);
      this.taskDoneList = res.data;
    });
  }
  selectedFriends(val: any) {
    this.TaskService.getTaskList({taskName: this.queryText,taskType: this.segmentList[val].title, taskStatus: 'doing'}).subscribe(res => {
      console.log(res);
      this.taskList = res.data;
    });
    this.TaskService.getTaskList({taskName: this.queryText,taskType: this.segmentList[val].title, taskStatus: 'done'}).subscribe(res => {
      console.log(res);
      this.taskDoneList = res.data;
    });
  }
  finish(val: any) {
    this.navCtrl.push(FinishTaskPage, {
      task: val
    });
  }
  edit(val: any) {
    this.navCtrl.push(AddTaskPage, {
      task: val
    });
  }
  delete(val: any) {
    const alert = this.alertCtrl.create({
      title: '你确认要删除这个任务吗？',
      message: '确认删除任务将无法还原',
      buttons: [
        {
          text: '取消',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: '确认',
          handler: () => {
            console.log(val)
            this.TaskService.deleteTask({id: val._id}).subscribe(res => {
              this.searchTask()
            })
          }
        }
      ]
    });

    alert.present();
  }
  addTask() {
    this.navCtrl.push(AddTaskPage);
  }
  unfinishTask(taskItem) {
    taskItem.id = taskItem._id;
    taskItem.taskStatus = 'doing';
    this.TaskService.editTask(taskItem).subscribe(res => {
      if(res.data) {
        const alert = this.alertCtrl.create({
          title: '任务复原',
          subTitle: '',
          buttons: ['Ok']
        });
    
        alert.present();
        this.navCtrl.push(TaskPage);
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
