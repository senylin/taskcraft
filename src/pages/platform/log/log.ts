import { Component, Inject, ChangeDetectorRef } from '@angular/core';
import { IonicPage, App, MenuController, NavController, NavParams, AlertController } from 'ionic-angular';
/**
 * Generated class for the TaskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-log',
  templateUrl: 'log.html',
})
export class LogPage {
  user = {
    // name: 'Paula Bolliger',
    profileImage: 'assets/img/avatar/girl-avatar.png',
    coverImage: 'assets/img/background/background-5.jpg',
    // occupation: 'Designer',
    // location: 'Seattle, WA',
    description: 'plaese set your signature',
    name: '',
    doneTask: 0,
    doingTask: 0,
    assist: 0
  };
  showSearch: boolean = false
  logList: any[] = [
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams,app: App, public menu: MenuController, public cd: ChangeDetectorRef,public alertCtrl: AlertController,@Inject('Config')public Config,
    @Inject('Store')public Store,@Inject('PlatformService')public PlatformService,@Inject('LoginService')public LoginService) {
    menu.enable(true);
    this.PlatformService.getLogList({}).subscribe(res => {
      this.logList = res.data;
      this.logList = this.logList.map( data => {
        this.LoginService.getUserById({_id: data.userId}).subscribe(res2 => {
          data.userName = res2.data.userName;
        })
        console.log(data)
        return data;
      })
    });
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
}
