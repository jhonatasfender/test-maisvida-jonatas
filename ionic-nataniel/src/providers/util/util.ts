import { Injectable } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class Util {

	public url: string = "http://localhost:8080/";

    constructor(
        protected http: Http,
        protected alertCtrl: AlertController,
        protected httpc: HttpClient,
        protected nav?: NavController,
    ) {

    }

	protected validateUrl(v: string) {
		return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(v);
	}

    protected post($url: string, $a: any) {
        return this.httpc.post(this.validateUrl($url) ? $url : this.url + $url, JSON.stringify($a),{
            headers: {
                "Content-Type": "application/json"
            }
        })
            .toPromise()
            .then(response => {
                    console.log(response);
                    try {
                        return response;
                    } catch(e) {}
                },
                e => {
                    this.alertProvider();
                    return e;
                });
    }

    protected put($url: string, $a: Array<any>) {
        // console.log(JSON.stringify(this.validateUrl($url) ? $url : this.url + $url + $a.join('/')));
        return this.http.get(this.validateUrl($url) ? $url : this.url + $url + $a.join('/'))
            .toPromise()
            .then(response => {
                    try {
                        return response.json();
                    } catch(e) {}
                },
                e => {
                    this.alertProvider();
                    return e;
                });
    }

    protected get($url: string) {
        return this.http.get(this.validateUrl($url) ? $url : this.url + $url)
            .toPromise()
            .then(response => {
                    try {
                        return response.json();
                    } catch(e) {}
                },
                e => {
                    this.alertProvider();
                    return e; 
                });
    }

    protected alertProvider() {
        const alert = this.alertCtrl.create({
            title: "Erro de Conexão",
            subTitle: "Atenção o seu dispositivo não está com uma conexão estavel, para utilizar o aplicativo, normalize sua conexão!",
            buttons: []
        });
        alert.present();
    }

}