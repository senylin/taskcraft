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

import { Config } from '../core/config.service'
import { HttpResponseHandlerService } from '../core/http-response.service'
// import { NgCalendarModule  } from 'ionic2-calendar';
import { CalendarModule } from "ion2-calendar";
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
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: 'Config', useClass: Config},
    {provide:'HttpResponseHandlerService', useClass: HttpResponseHandlerService}
  ]
})
export class AppModule {}
