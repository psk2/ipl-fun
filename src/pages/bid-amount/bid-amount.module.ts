import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BidAmountPage } from './bid-amount';

@NgModule({
  declarations: [
    BidAmountPage,
  ],
  imports: [
    IonicPageModule.forChild(BidAmountPage),
  ],
})
export class BidAmountPageModule {}
