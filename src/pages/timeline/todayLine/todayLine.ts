import { Component,Inject } from '@angular/core';
import { IonicPage, App, MenuController, NavController, NavParams, AlertController } from 'ionic-angular';
import { LoginPage } from '../../login/login';
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
  selector: 'page-todayLine',
  templateUrl: 'todayLine.html',
})
export class TodayLinePage {
  date: string;
  today: string;
  dayList: any = [
    {planHour:'1:00', taskName: ''},
    {planHour:'2:00', taskName: ''},
    {planHour:'3:00', taskName: ''},
    {planHour:'4:00', taskName: ''},
    {planHour:'5:00', taskName: ''},
    {planHour:'6:00', taskName: ''},
    {planHour:'7:00', taskName: ''},
    {planHour:'8:00', taskName: ''},
    {planHour:'9:00', taskName: ''},
    {planHour:'10:00', taskName: ''},
    {planHour:'11:00', taskName: ''},
    {planHour:'12:00', taskName: ''},
    {planHour:'13:00', taskName: ''},
    {planHour:'14:00', taskName: ''},
    {planHour:'15:00', taskName: ''},
    {planHour:'16:00', taskName: ''},
    {planHour:'18:00', taskName: ''},
    {planHour:'19:00', taskName: ''},
    {planHour:'20:00', taskName: ''},
    {planHour:'21:00', taskName: ''},
    {planHour:'22:00', taskName: ''},
    {planHour:'23:00', taskName: ''},
    {planHour:'24:00', taskName: ''}
  ];
  taskTodayList: any = [];
  taskList: any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,app: App, public menu: MenuController, public alertCtrl: AlertController,
    @Inject('TimelineService') public TimelineService, @Inject('TaskService') public TaskService) {
    if (navParams.get('today')) {
      console.log(navParams.get('today'))
      this.today = navParams.get('today');
    }
    this.TaskService.getTaskList({taskStatus: 'doing'}).subscribe(res => {
      console.log(res);
      this.taskList = res.data;
    });
    // const td = this.today.split('-');
    this.TimelineService.getTimelineList({planDate:this.today}).subscribe(res => {
      this.taskTodayList = res.data;
      this.taskTodayList.forEach(data => {
        this.dayList.map(day => {
          if(data.planHour === day.planHour) {
            return day.taskName = data.taskName;
          }
        })
      })
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
    console.log($event);
  }
  select(item) {
    const alert = this.alertCtrl.create();
    alert.setTitle('我的任务');
    alert.addInput({
      type: 'radio',
      label: '',
      value: '',
      checked: false
    })
    this.taskList.forEach(data => {
      alert.addInput({
        type: 'radio',
        label: data.taskName,
        value: data._id,
        checked: false
      })
    })

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Ok',
      handler: (data: any) => {
        console.log(data);
        if(data) {
         this.TaskService.getTaskOne({id: data}).subscribe( res => {
           console.log(this.today.split('-') , item.time)
          //  const td = this.today.split('-');
           this.TimelineService.createTimeline({...res.data, planDate:this.today, planHour: item.planHour, planStatus: 'ready', planTask: res.data._id }).subscribe(
             data => {
               if(data.data) {
                  this.TimelineService.getTimelineList({planDate:this.today}).subscribe(res2 => {
                    this.taskTodayList = res2.data;
                    this.taskTodayList.forEach(data => {
                      this.dayList.map(day => {
                        if(data.planHour === day.planHour) {
                          return day.taskName = data.taskName;
                        }
                      })
                    })
                    console.log(this.taskTodayList)
                  })
               } else {
                  const alert = this.alertCtrl.create({
                    title: 'Error',
                    subTitle: '创建失败',
                    buttons: ['close']
                  });
                  alert.present();
               }
             }
           )
           console.log(res)
         })
        }
      }
    });

    alert.present();
  }
  selectSame() {
    console.log(111)
  }
}
