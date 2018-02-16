import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { Validators, FormBuilder } from '@angular/forms';
import { LoadingController, AlertController } from 'ionic-angular';
import { IplServiceProvider } from '../../providers/ipl-service/ipl-service';
// import { HomePage } from '../home/home';

@IonicPage()
@Component({
	selector: 'page-register',
	templateUrl: 'register.html',
})
export class RegisterPage {
	registrationForm: any;
	user = {};
	submitObject = {};
	constructor(public alertCtrl: AlertController, private iplService: IplServiceProvider, public loadingCtrl: LoadingController, private formBuilder: FormBuilder, public navCtrl: NavController, public navParams: NavParams) {
		this.registrationForm = this.formBuilder.group({
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
			duration: 1000
		});
		loader.present();
		let formData = this.registrationForm.value;
		if (formData.password === formData.confirmPassword) {
			if (this.registrationForm.dirty && this.registrationForm.valid) {
				this.iplService.playerRegister(this.registrationForm.value)
					.subscribe(
						response => {
							let res: any = response;
							console.log('res', res)
							if (res.status && res.status === "201") {
								this.registrationForm.reset();
								this.showAlert(res);
							}
						},
						err => {
							if (err) {
								this.showAlert(err);
							}
						}
					);
			}
		} else {
			let errors = "Passwords do not match"
			console.log('errors', errors)
		}
	}
	showAlert(data) {
		console.log('data', data)
		let message: any;
		let title: any;
		if (data.status == "409") {
			title = 'Hurrayy..!'
			message = "Your are already rigistered. Please login to start bidding..!"
		} else if (data.status == "201") {
			title = 'Hurrayy..!'
			message = "You got registered successfully. Please login to start bidding..!"
		} else {
			title = 'Sorry..!'
			message = "Something went wrong. Please try later"
		}
		let alert = this.alertCtrl.create({
			title: title,
			subTitle: message,
			buttons: [
				{
					text: 'Ok',
					handler: showData => {
						if (data.status == 409) {
							this.navCtrl.push(LoginPage)
						} else if (data.status == 201) {
							this.navCtrl.push(LoginPage)
						} else {
							this.registrationForm.reset();
						}
					}
				}
			]
		});
		alert.present();
	}

}
