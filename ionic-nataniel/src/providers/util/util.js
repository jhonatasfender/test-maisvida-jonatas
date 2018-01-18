var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { CONSTANTS, url } from '../../app/constants/constants';
var Util = /** @class */ (function () {
    function Util(http, alertCtrl, nav) {
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.nav = nav;
        this.constants = CONSTANTS;
        this.url = url;
    }
    Util.prototype.validateUrl = function (v) {
        return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(v);
    };
    Util.prototype.post = function ($url, $a) {
        var _this = this;
        return this.http.post(this.validateUrl($url) ? $url : this.url + $url, JSON.stringify($a))
            .toPromise()
            .then(function (response) {
            try {
                return response.json();
            }
            catch (e) { }
        }, function (e) {
            _this.alertProvider();
            return e;
        });
    };
    Util.prototype.put = function ($url, $a) {
        var _this = this;
        // console.log(JSON.stringify(this.validateUrl($url) ? $url : this.url + $url + $a.join('/')));
        return this.http.get(this.validateUrl($url) ? $url : this.url + $url + $a.join('/'))
            .toPromise()
            .then(function (response) {
            try {
                return response.json();
            }
            catch (e) { }
        }, function (e) {
            _this.alertProvider();
            return e;
        });
    };
    Util.prototype.get = function ($url) {
        var _this = this;
        return this.http.get(this.validateUrl($url) ? $url : this.url + $url)
            .toPromise()
            .then(function (response) {
            try {
                return response.json();
            }
            catch (e) { }
        }, function (e) {
            _this.alertProvider();
            return e;
        });
    };
    Util.prototype.alertProvider = function () {
        var alert = this.alertCtrl.create({
            title: "Erro de Conexão",
            subTitle: "Atenção o seu dispositivo não está com uma conexão estavel, para utilizar o aplicativo, normalize sua conexão!",
            buttons: []
        });
        alert.present();
        /*if(JSON.parse(localStorage.getItem("user")) != undefined && JSON.parse(localStorage.getItem("user")) != null)
            this.nav.setRoot(HomePage);
        else
            this.nav.setRoot(LoginPage);*/
    };
    Util = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Http,
            AlertController,
            NavController])
    ], Util);
    return Util;
}());
export { Util };
//# sourceMappingURL=util.js.map