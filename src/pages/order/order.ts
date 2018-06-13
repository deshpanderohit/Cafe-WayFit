import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { TabsPage } from '../tabs-page/tabs-page';

/**
 * Generated class for the OrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
})
export class OrderPage {

  meal: any;
  toppings: any;
  combo: any;
  timeslot: any;
  total: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public storage: Storage) {
    this.meal = this.navParams.get('meal');
    this.toppings = this.navParams.get('toppings');
    this.combo = this.navParams.get('combo');
    this.timeslot = this.navParams.get('timeslot');
    this.total = this.navParams.get('total');

    console.log("Meal: "+ JSON.stringify(this.meal));
    console.log("Toppings: "+this.toppings);
    console.log("Combo: "+this.combo);

    this.storage.set('final-meal',JSON.stringify(this.meal));
    this.storage.set('timeslot',JSON.stringify(this.timeslot));
    this.storage.set('total',this.total);
    if(this.toppings)
      this.storage.set('final-top',JSON.stringify(this.toppings));
    if(this.combo)
      this.storage.set('final-combo',JSON.stringify(this.combo));
    

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderPage');
  }

  home() {
    this.navCtrl.setRoot(TabsPage);
  }

}
