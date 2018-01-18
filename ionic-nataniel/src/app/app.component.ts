import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';
import {StatusBar} from 'ionic-native';

// import pages
import {LoginPage} from '../pages/login/login';
import { MainTabsPage } from '../pages/main-tabs/main-tabs';


@Component({
	template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class MyApp {

	public rootPage:any;

	public nav:any;

	constructor(public platform:Platform) {
		// localStorage.removeItem("login");
		if(JSON.parse(localStorage.getItem("login")) == true) 
			this.rootPage = MainTabsPage;
		else 
			this.rootPage = LoginPage;

		platform.ready().then(() => {
			StatusBar.styleDefault();
		});
	}
}
