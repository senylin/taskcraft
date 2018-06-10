import { Component, Inject } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Push, PushObject, PushOptions } from '@ionic-native/push';
import { JPush } from 'ionic3-jpush';
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

  constructor(platform: Platform, public jPush: JPush,statusBar: StatusBar, public push:Push,splashScreen: SplashScreen, @Inject('Store')public Store) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      //根据不同平台实现消息推送功能
      if(platform.is('ios')){
        this.initPushNotification();
      }else if(platform.is('android')){
        jPush.init();
        // this.androidGetRegId();

        jPush.openNotification()
        .subscribe( res => {
          console.log('收到推送');
          console.log(res)
        });
  
        jPush.receiveNotification()
          .subscribe( res => {
            console.log('收到推送');
            console.log(res)
        });
  
        jPush.receiveMessage()
          .subscribe( res => {
            console.log('收到推送');
            console.log(res)
        });
      }else{
        console.log('cannot find platform')
      }
    });
  }
  initPushNotification() { 
    // if(!this.platform.is('cordova')) {
    //   console.warn('Push notifications only work on a real device');
    //     return;
    //   }
    
    const options: any = {
      ios: {
        alert: true,
        badge: true,
        sound: true
      }
    };

    const pushObject: any = this.push.init(options);
    
      pushObject.on('registration').subscribe((data: any) => {
        console.log('device token: ' + data.registrationId);
        // this.storage.set('device token', data.registrationId);
      });
      pushObject.on('error').subscribe(error => {
        console.error('Error with Push plugin' + error);
      });
      pushObject.on('notification').subscribe((data: any) => { 
        // log message
        console.log('Got a message: ' + data.message);   
        // if user using app and push notification comes
        if(data.additionalData.foreground) {  
          // for example show some alert in the app
          console.log('Notification received while App was in foreground'); 
        } else {   
          // do something on push notification click
          console.log('Push notification clicked');  
        }
      });
  }
  openPage(page: any) {
    console.log(page)
  }
}
