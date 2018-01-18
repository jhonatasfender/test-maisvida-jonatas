import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { DocProvider } from '../../providers/doc/doc';
import { AddEditPage } from '../add-edit/add-edit';

@Component({
	selector: 'page-main-tabs',
	templateUrl: 'main-tabs.html'
})
export class MainTabsPage {

	public tabHome = HomePage;
	public tabAddEdit = AddEditPage;

	constructor(
		public nav: NavController
	) {

	}
}
