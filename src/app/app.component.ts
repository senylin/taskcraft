import { Component, Inject } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = LoginPage;
  pages: any = [
    {
      icon: 'git-network',
      title: '我的任务链'
    },
    {
      icon: 'git-merge',
      title: '我的时间树'
    }
  ]

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, @Inject('Store')public Store) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openPage(page: any) {
    console.log(page)
  }
}
