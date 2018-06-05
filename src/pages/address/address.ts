import { Component, Renderer } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the AddressPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-address',
  templateUrl: 'address.html',
})
export class AddressPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public renderer: Renderer,public viewCtrl: ViewController) {
    //this.renderer.setElementClass(viewCtrl.pageRef().nativeElement,'page-address',true);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddressPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
