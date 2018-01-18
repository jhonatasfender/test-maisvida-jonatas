import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { HttpClient } from '@angular/common/http';

import { NavController, AlertController } from 'ionic-angular';
import { Util } from '../util/util';

import { DTODoc } from './dto-doc';

@Injectable()
export class DocProvider extends Util { 

	constructor(
		protected http: Http,
		protected nav: NavController,
        protected httpc: HttpClient,
		protected alertCtrl: AlertController
	) {
        super(http,alertCtrl,httpc,nav);
	}

	public getDoc() {
		return this.get('index/getdoc');
	}

	public find($d: number) {
		return this.get('index/find/' + $d);
	}

	public save($d: DTODoc) {
		return this.post('index/save', $d);
	}

	public active($d: DTODoc) {
		return this.post('index/active', $d);
	}

	public status($d: DTODoc) {
		return this.post('index/status', $d);
	}

}
