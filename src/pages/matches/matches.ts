import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the MatchesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-matches',
	templateUrl: 'matches.html',
})
export class MatchesPage {
	gaming:any;
	list = 5;
	matchesArray = [];
	constructor(public alertCtrl: AlertController, public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad MatchesPage');
		for (let i = 0; i <= this.list; i++) {
			this.matchesArray.push(i);
			console.log('matchesArray', this.matchesArray)
		}
	}
	bidding(match) {
		// let modal = this.modalCtrl.create(BidAmountPage, { yourParam: match });
		// modal.present();
	}
	submitBidAmount(){
		let alert = this.alertCtrl.create({
			title: 'Excellent..!',
			subTitle: `You've successfully bid ${this.gaming} your points...! Enjoy watching the live score.`,
			buttons: [
				{
				  text: 'Ok',
				  handler: data => {
					// this.navCtrl.push(HomePage)
				  }
				}
			  ]
		});
		alert.present();
	}

}
