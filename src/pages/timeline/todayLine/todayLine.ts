import { Component } from '@angular/core';
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
    {time:'1:00', task: 'hello'},
    {time:'2:00', task: ''},
    {time:'3:00', task: ''},
    {time:'4:00', task: ''},
    {time:'5:00', task: ''},
    {time:'6:00', task: ''},
    {time:'7:00', task: ''},
    {time:'8:00', task: ''},
    {time:'9:00', task: ''},
    {time:'10:00', task: ''},
    {time:'11:00', task: ''},
    {time:'12:00', task: ''},
    {time:'13:00', task: ''},
    {time:'14:00', task: ''},
    {time:'15:00', task: ''},
    {time:'16:00', task: ''},
    {time:'18:00', task: ''},
    {time:'19:00', task: ''},
    {time:'20:00', task: ''},
    {time:'21:00', task: ''},
    {time:'22:00', task: ''},
    {time:'23:00', task: ''},
    {time:'24:00', task: ''}
  ];
  taskTodayList: any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,app: App, public menu: MenuController, public alertCtrl: AlertController) {
    if (navParams.get('today')) {
      console.log(navParams.get('today'))
      this.today = navParams.get('today');
    }
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
  select() {
    const alert = this.alertCtrl.create();
    alert.setTitle('Lightsaber color');

    alert.addInput({
      type: 'radio',
      label: 'Blue',
      value: 'blue',
      checked: true
    });

    alert.addInput({
      type: 'radio',
      label: 'Green',
      value: 'green'
    });

    alert.addInput({
      type: 'radio',
      label: 'Red',
      value: 'red'
    });

    alert.addInput({
      type: 'radio',
      label: 'Yellow',
      value: 'yellow'
    });

    alert.addInput({
      type: 'radio',
      label: 'Purple',
      value: 'purple'
    });

    alert.addInput({
      type: 'radio',
      label: 'White',
      value: 'white'
    });

    alert.addInput({
      type: 'radio',
      label: 'Black',
      value: 'black'
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Ok',
      handler: (data: any) => {
      }
    });

    alert.present();
  }
  selectSame() {
    console.log(111)
  }
}
