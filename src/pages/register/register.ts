import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { Validators, FormBuilder } from '@angular/forms';
import { LoadingController, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
	selector: 'page-register',
	templateUrl: 'register.html',
})
export class RegisterPage {
	registration: any;
	user = {};
	submitObject = {};
	constructor(public alertCtrl: AlertController, public loadingCtrl: LoadingController, private formBuilder: FormBuilder, public navCtrl: NavController, public navParams: NavParams) {
		this.registration = this.formBuilder.group({
			name: ['', Validators.required],
			email: ['', Validators.required],
			password: ['', Validators.required],
			confirmPassword: ['', Validators.required],
		});
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad RegisterPage');
	}

	register() {
		let loader = this.loadingCtrl.create({
			content: "Please wait...",
			duration: 3000
		});
		loader.present();
		setTimeout(() => {
			this.showAlert();
		}, 3000)
		console.log('user', this.registration.value);
		this.registration.reset();
	}
	showAlert() {
		let alert = this.alertCtrl.create({
			title: 'Hurrayy..!',
			subTitle: 'You got registered successfully. Please login to start bidding..!',
			buttons: [
				{
				  text: 'Ok',
				  handler: data => {
					this.navCtrl.push(LoginPage)
				  }
				}
			  ]
		});
		alert.present();
	}

}
