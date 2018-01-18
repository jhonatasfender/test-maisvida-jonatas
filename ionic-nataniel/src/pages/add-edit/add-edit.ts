import { Component } from '@angular/core'; 
import { IonicPage, NavController, NavParams, LoadingController, Loading, AlertController } from 'ionic-angular';

import { DocProvider } from '../../providers/doc/doc';
import { DTODoc } from '../../providers/doc/dto-doc';

import { MainTabsPage } from '../main-tabs/main-tabs';

import { CONSTANTS } from '../../app/constants/constants';

@Component({
	selector: 'page-add-edit',
	templateUrl: 'add-edit.html',
	providers: [
		DocProvider
	]
})
export class AddEditPage {

	protected l: Loading;
	protected a: any;
	protected title: string;

	private doc: DTODoc;

	constructor(
    	public lc: LoadingController,
    	public ac: AlertController,
		public nc: NavController, 
		public np: NavParams,
		public d: DocProvider
	) {
		this.doc = new DTODoc();
		this.title = "Adicionar";
		console.log(this.np.get("title"),this.title);
		if(this.np.get("title")) {
			this.title = this.np.get("title");
		}

		if(this.np.get("id") != null) { 
			this.d.find(this.np.get("id")).then((t) => {
				this.doc = new DTODoc(t);
			});
		}

	}

	public edit($id) {
		this.nc.push(AddEditPage,{
			id: $id,
			title: "Editar"
		});
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

	public back() {
		this.nc.pop();
	}

	public signUp() {
		if(this.doc.getFirstName() == "") {
            this.alert("Atenção","Atenção o primeiro nome é obrigatorio");
        } else if(this.doc.getLastName() == "") {
            this.alert("Atenção","Atenção o segundo nome é obrigatorio!");
        } else if(this.doc.getSpecialty() == "") {
            this.alert("Atenção","O campo Especialidade é obrigatorio!");
        } else if(this.doc.getState() == "") {
            this.alert("Atenção","O campo Estado é obrigatorio");
        } else if(this.doc.getCity() == "") {
            this.alert("Atenção","O campo Cidade é obrigatorio");
        } else if(this.doc.getEmail() == "") {
            this.alert("Atenção","Este campo Email é obrigatorio");
        } else {
            this.d.save(this.doc).then((t) => {
                if(t._body != undefined) {
                    this.alert('Atenção',"Erro");
                } else {
                    for (let i in CONSTANTS.list) {
                    	if(CONSTANTS.list[i].getId() == t.id) {
                    		CONSTANTS.list[i] = new DTODoc(t);
                    	}
                    }
					this.nc.pop();
                }
            });
        }
	}

}
