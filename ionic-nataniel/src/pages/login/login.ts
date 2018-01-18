import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { MainTabsPage } from '../main-tabs/main-tabs';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

	public _login: string;
	public password: string;
	public p: string;

	protected a: any;
	
	constructor(
		public nav: NavController,
    	public ac: AlertController,
	) {

	}

	protected alert($t: string, $s: string) {
		this.a = this.ac.create({
			title: $t,
			subTitle: $s,
			buttons: [
				'OK'
			]
		});
		this.a.present();
	}


	login() {
		if(this._login == "") {
            this.alert("Atenção","Atenção o Login é obrigatorio");
        } else if(this.password == "") {
            this.alert("Atenção","Atenção o Senha é obrigatorio!");
        } else {
        	if(this._login == "candidato@gmail.com" && this.password == "1") {
        		if(this.p)
        			localStorage.setItem("login","true");
				this.nav.push(MainTabsPage);
        	} else if(this._login != "candidato@gmail.com") {
            	this.alert("Atenção","Atenção Login incorreto!");
        	} else if(this.password != "1") {
            	this.alert("Atenção","Atenção Senha incorreta!");
        	}
		}
	}

}
