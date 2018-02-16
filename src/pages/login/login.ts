import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MatchesPage } from '../matches/matches';
import { Validators, FormBuilder } from '@angular/forms';
import { IplServiceProvider } from '../../providers/ipl-service/ipl-service';
import { ValidationProvider } from '../../providers/validation/validation';


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
	user = {
		email: "",
		password: ""

	};
	constructor(private iplService: IplServiceProvider, private formBuilder: FormBuilder, public navCtrl: NavController, public navParams: NavParams) {
		this.loginForm = this.formBuilder.group({
			email: ['', Validators.compose([Validators.required, ValidationProvider.emailValidator])],
			password: ['', Validators.compose([Validators.required, ValidationProvider.passwordValidator])]
		});
	}

	doLogin() {
		if (this.loginForm.dirty && this.loginForm.valid) {
			this.iplService.playerLogin(this.loginForm.value).subscribe((response) => {
				let res: any = response;
				if (res.status && res.status === "success") {
					this.loginForm.reset();
					this.navCtrl.push(MatchesPage)
				}
			})
		}
	}

}
