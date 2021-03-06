import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Http,Headers,RequestOptions,ConnectionBackend } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { SharedModule } from '../shared/shared.module';
import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { PageModule } from '../pages/page.module'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Push, PushObject, PushOptions } from '@ionic-native/push';

import { Config } from '../core/config.service'
import { Store } from '../core/store.service'
import { HttpResponseHandlerService } from '../core/http-response.service'

import { CalendarModule } from "ion2-calendar";
import { JPush } from 'ionic3-jpush';



@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    PageModule,
    SharedModule,
    // NgCalendarModule,
    CalendarModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    JPush,
    Push,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: 'Config', useClass: Config},
    {provide: 'Store', useClass: Store},
    {provide: 'HttpResponseHandlerService', useClass: HttpResponseHandlerService},
  ]
})
export class AppModule {}
