import { Component } from '@angular/core';
import { IonicPage, App, MenuController, NavController, NavParams, AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { TodayLinePage } from './todayLine/todayLine';
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
  constructor(public navCtrl: NavController, public navParams: NavParams,app: App, public menu: MenuController, public alertCtrl: AlertController) {
    console.log(new Date(new Date().getTime()+8*60*60*1000).toISOString().substr(0,10))
  }
  openLogin() {
    this.navCtrl.push(LoginPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TimelinePage');
  }
  onChange($event) {
    console.log($event);
    console.log(this.date)
  }
  finishTask() {
    console.log(111);
  }
  toToday() {
    this.navCtrl.push(TodayLinePage, {
      today: this.date
    });
  }
}
