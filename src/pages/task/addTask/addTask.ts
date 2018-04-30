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
  selector: 'page-addTask',
  templateUrl: 'addTask.html',
})
export class AddTaskPage {
  selectedSegment: any = 'home'
  segmentList: any = [
    {
      Name: 'home',
      title: 'home'
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
  labs:Object = [];
  taskList: any = [
    { lab: '家庭', title: '做饭', icon: 'home' },
    { lab: '家庭', title: '买菜', icon: 'home'},
    { lab: '家庭', title: '洗鱼', icon: 'home'},
    { lab: '家庭', title: '泡茶', icon: 'home'},
    { lab: '家庭', title: '睡觉', icon: 'home'}
  ]
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
  selectedFriends(val: any) {
    console.log(this.selectedSegment, val)
  }
}
