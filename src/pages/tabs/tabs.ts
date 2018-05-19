import { Component, Inject } from '@angular/core';
import { IonicPage, App, MenuController, NavController, NavParams, AlertController } from 'ionic-angular';
import { TaskPage } from '../task/task';
import { TimelinePage } from '../timeline/timeline';
import { PlatformPage } from '../platform/platform';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tabRoots:Object = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,app: App, public menu: MenuController, public alertCtrl: AlertController,@Inject('Config')public Config,
  @Inject('Store')public Store) {
    this.tabRoots = [
      {
        root: TaskPage,
        tabTitle: '任务',
        tabIcon: 'list-box'
      },
      {
        root: TimelinePage,
        tabTitle: ' 时间',
        tabIcon: 'calendar'
      },
      {
        root: PlatformPage,
        tabTitle: ' 协作',
        tabIcon: 'contacts'
      }
    ]
  }
  getSelected(tabs) {
    console.log(tabs)
  }
  ionChange() {
    this.Store.setPerson(this.Store.user);
    console.log(this.Store.person)
    // this.navCtrl.parent.select(2);
  }
}
