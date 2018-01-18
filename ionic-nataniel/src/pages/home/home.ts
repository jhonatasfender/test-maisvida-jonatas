import { Component } from '@angular/core';
import { App, NavController } from 'ionic-angular';
import { DocProvider } from '../../providers/doc/doc';
import { DTODoc } from '../../providers/doc/dto-doc';
import { AddEditPage } from '../add-edit/add-edit';
import { CONSTANTS } from '../../app/constants/constants';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html',
	providers: [
		DocProvider
	]
})
export class HomePage {

	private doc: Array<DTODoc>;

	constructor(
		public nav:NavController, 
		public app:App,
		public d: DocProvider
	) {
		this.doc = CONSTANTS.list;
		this.all();
	}

	public doRefresh(refresher) {
		this.all().then((t) => {
			refresher.complete();
		});
	}

	private all() {
		this.doc = new Array();
		return this.d.getDoc().then((t) => {
			for(let i in t)
				this.doc.push(new DTODoc(t[i]));
			CONSTANTS.list = this.doc
			this.doc = CONSTANTS.list;
		});
	}

	private active($d) {
		this.d.active($d).then((t) => {
            if(t._body != undefined) {

            } else {
                for (let i in CONSTANTS.list) {
                	if(CONSTANTS.list[i].getId() == t.id) {
                		CONSTANTS.list[i] = new DTODoc(t);
                	}
                }
            }
        });
	}

	private status($d) {
		this.d.status($d).then((t) => {
            if(t._body != undefined) {

            } else {
                for (let i in CONSTANTS.list) {
                	if(CONSTANTS.list[i].getId() == t.id) {
                		CONSTANTS.list[i] = new DTODoc(t);
                	}
                }
            }
        });
	}

	public edit($id) {
		this.app.getRootNav().push(AddEditPage,{
			id: $id,
			title: "Editar"
		});
	}

	public viewer($id) {
		this.app.getRootNav().push(AddEditPage,{
			id: $id,
			title: "Visualizar"
		});
	}
}
