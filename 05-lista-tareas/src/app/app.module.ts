import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { PendingPage } from '../pages/pending/pending.component';
import { FinishedPage } from '../pages/finished/finished.component';
import { AddListPage } from '../pages/add-list/addList.component';

import { TasklistService } from '../services/tasklist.service';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    PendingPage,
    FinishedPage,
    AddListPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    PendingPage,
    FinishedPage,
    AddListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    TasklistService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
