import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MatchesPage } from '../matches/matches';
import { Validators, FormBuilder } from '@angular/forms';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-login',
	templateUrl: 'login.html',
})
export class LoginPage {
	login: any;
	user = {
		email: "",
		password: ""

	};
	constructor( private formBuilder: FormBuilder,public navCtrl: NavController, public navParams: NavParams) {
		this.login = this.formBuilder.group({
			email: ['', Validators.required],
			password: ['', Validators.required]
		});
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad LoginPage');
	}

	doLogin() {
		// if (this.user.email == "psk" && this.user.password == "12345")
		console.log('email', this.user);
		this.login.reset();
		this.navCtrl.push(MatchesPage)
	}

}
