import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';

import { UserData } from '../../providers/user-data';
import { MapPage } from '../map/map';



/**
 * Generated class for the DescriptionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-description',
  templateUrl: 'description.html',
})
export class DescriptionPage {

  item: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController,
              public userData: UserData,
              public toastCtrl: ToastController
            ) {
    
                this.item = navParams.get('item');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DescriptionPage');
  }

  dismiss(data?: any) {
    this.viewCtrl.dismiss(data);
  }

  add(item: any) {

    this.userData.hasLoggedIn().then((data) =>{

      if(data) {
        this.userData.addToCart(item); 
          let toast = this.toastCtrl.create({
            message: 'Product added to cart',
            duration: 8000,
            showCloseButton: true,
            closeButtonText: 'View'
          });

          
          toast.onDidDismiss((data,role) => {
            console.log("Success: "+data);
            if (role == 'close') {
              this.navCtrl.push(MapPage);    
            }
        });
          toast.present();
      }
      else {

        this.userData.addToCart(item); 
        let toast = this.toastCtrl.create({
          message: 'Product added to cart',
          duration: 8000,
          showCloseButton: true,
          closeButtonText: 'View'
        });

        toast.onDidDismiss((data,role) => {
          console.log("Success: "+data);
          if (role == 'close') {
            this.navCtrl.push(MapPage);
          }
        });
        toast.present();
      }
    });


  }
}
