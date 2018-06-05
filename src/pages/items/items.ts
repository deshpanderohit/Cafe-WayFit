import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ItemsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-items',
  templateUrl: 'items.html',
})
export class ItemsPage {

  item: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.item = navParams.get('item');
    //alert("Items: "+JSON.stringify(this.item));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemsPage');
  }

  dismiss(data?: any) {
    this.viewCtrl.dismiss(data);
  }

}
