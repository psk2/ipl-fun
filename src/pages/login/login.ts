import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { MatchesPage } from '../matches/matches';
import { Validators, FormBuilder } from '@angular/forms';
import { IplServiceProvider } from '../../providers/ipl-service/ipl-service';
import { ValidationProvider } from '../../providers/validation/validation';
import { RegisterPage } from '../register/register';


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
	loginForm: any;
	submitted: boolean;
	constructor(public alertCtrl: AlertController, private iplService: IplServiceProvider, private formBuilder: FormBuilder, public navCtrl: NavController, public navParams: NavParams) {
		this.loginForm = this.formBuilder.group({
			email: ['', Validators.compose([Validators.required])],
			password: ['', Validators.compose([Validators.required])]
		});
	}

	doLogin() {
		this.submitted = true;
		if (this.loginForm.dirty && this.loginForm.valid) {
			this.iplService.playerLogin(this.loginForm.value)
				.subscribe(
					response => {
						let res: any = response;
						console.log('res', res)
						if (res.status && res.status === "success") {
							this.loginForm.reset();
							this.navCtrl.push(MatchesPage)
						}
					},
					err => {
						if (err) {
							this.showAlert();
						}
					}
				);
		}
	}

	showAlert() {
		let alert = this.alertCtrl.create({
			title: 'Sorry..!',
			subTitle: 'You are not registerd yet. Please register to login..',
			buttons: [
				{
					text: 'Ok',
					handler: data => {
						this.loginForm.reset();
						this.navCtrl.push(RegisterPage)
					}
				}
			]
		});
		alert.present();
	}

}
