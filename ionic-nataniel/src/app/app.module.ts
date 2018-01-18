import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { BrowserModule } from '@angular/platform-browser';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { MainTabsPage } from '../pages/main-tabs/main-tabs';
import { AddEditPage } from '../pages/add-edit/add-edit';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        LoginPage,
        MainTabsPage,
        AddEditPage
    ],
    imports: [
        BrowserModule,
        HttpModule,
        HttpClientModule,
        IonicModule.forRoot(MyApp, {
            platforms: {
                android: {
                    tabsPlacement: 'top',
                    tabsLayout: 'title-hide'
                },
                ios: {
                    backButtonText: '',
                },
                windows: {
                    tabsLayout: 'title-hide'
                }
            }
        })
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        LoginPage,
        MainTabsPage,
        AddEditPage
    ],
    providers: [

    ]
})
export class AppModule {}
/*
 {
 platforms: {
 android: {
 tabbarLayout: 'title-hide'
 },
 windows: {
 tabbarLayout: 'title-hide'
 }
 }
 }
 */