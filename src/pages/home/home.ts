import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';
import { IplServiceProvider } from '../../providers/ipl-service/ipl-service';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	constructor(private service: IplServiceProvider,public navCtrl: NavController) {

	}

	ionViewDidLoad() {
		this.service.getMatches()
		.subscribe(
			response => {
				let res: any = response;
				console.log('res', res)
			},
			err => {
			}
		  );
	}

	login() {
		this.navCtrl.push(LoginPage)
	}

	register() {
		this.navCtrl.push(RegisterPage)
	}

}
