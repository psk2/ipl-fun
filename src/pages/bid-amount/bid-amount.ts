import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BidAmountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bid-amount',
  templateUrl: 'bid-amount.html',
})
export class BidAmountPage {
  gaming:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    let param = navParams.get('yourParam');
    console.log('param', param)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BidAmountPage');
  }

  submitBidAmount(){
    console.log('this.gaming', this.gaming)
  }

}
