import { Component, Inject } from '@angular/core';
import { IonicPage, App, MenuController, NavController, NavParams, AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { TodayLinePage } from './todayLine/todayLine';
import { FinishTaskPage } from '../task/finishTask/finishTask'
import {
  CalendarComponentOptions
} from 'ion2-calendar'
/**
 * Generated class for the TimelinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-timeline',
  templateUrl: 'timeline.html',
})
export class TimelinePage {
  date: string = new Date(new Date().getTime()+8*60*60*1000).toISOString().substr(0,10);
  type: 'string'; // 'string' | 'js-date' | 'moment' | 'time' | 'object'
  taskTodayList: any = [];
  options: CalendarComponentOptions = {
    from: new Date(2000, 0, 1),
  };
  taskList: any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,app: App, public menu: MenuController, public alertCtrl: AlertController,
    @Inject('Store')public Store,@Inject('TaskService') public TaskService, @Inject('TimelineService') public TimelineService) {
      console.log(navParams.get('date'))
      if (navParams.get('date')) {
        this.date = navParams.get('date');
      }
      this.TaskService.getTaskList({}).subscribe(res => {
        console.log(res);
        this.taskList = res.data;
      });
      this.TimelineService.getTimelineList({planDate:this.date}).subscribe(res => {
        this.taskTodayList = [];
        this.taskList.forEach( task => {
          let exist = 0;
          res.data.forEach( plan => {
            if (plan.planTask === task._id) {
              exist += 1;
            }
          })
          if (exist) {
            this.taskTodayList.push(task)
          }
        })
        // this.taskTodayList = res.data;
        console.log(this.taskTodayList)
      })
  }
  openLogin() {
    this.navCtrl.push(LoginPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TimelinePage');
  }
  onChange($event) {
    this.TimelineService.getTimelineList({planDate:this.date}).subscribe(res => {
      this.taskTodayList = [];
      this.taskList.forEach( task => {
        let exist = false;
        res.data.forEach( plan => {
          if (plan.planTask === task._id) {
            exist = true;
          }
        })
        if (exist) {
          this.taskTodayList.push(task)
        }
      })
      // this.taskTodayList = res.data;
      console.log(this.taskTodayList)
    })
  }
  finishTask(item) {
    // let val = {};
    // this.taskList.forEach(data => {
    //   if (item.planTask == data._id) {
    //     val = data;
    //   }
    // })
    this.navCtrl.push(FinishTaskPage, {
      task: item,
      page: 'TimelinePage',
      date: this.date
    });
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
        this.navCtrl.push(TimelinePage, {
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
  toToday() {
    this.navCtrl.push(TodayLinePage, {
      today: this.date
    });
  }
}
