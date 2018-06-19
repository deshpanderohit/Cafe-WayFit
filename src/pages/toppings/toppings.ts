import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalOptions, ToastController, Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { UserData } from '../../providers/user-data';


//import { MapPage } from '../map/map';

/**
 * Generated class for the ToppingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-toppings',
  templateUrl: 'toppings.html',
})
export class ToppingsPage {

  myModalOptions: ModalOptions = {
    enableBackdropDismiss: false,
    cssClass : 'pricebreakup'
  };

  item: any = [];
  topping: any = [];
  count = 0;
  meal: any = [];
  data: Array<{ id: string, tops: string }> = [];
  tid: string;
  toast: any;
  itemList: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,  public viewCtrl: ViewController, public storage: Storage, public userData: UserData, public toastCtrl: ToastController, public events: Events) {
    this.item = navParams.get("meal");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ToppingsPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
    //this.navCtrl.setRoot(MapPage);
  }

  public getToppings(top?: string, combo?: string): void {
    
    console.log("Received: "+JSON.stringify(top)+" "+JSON.stringify(combo));
    //var panTop = JSON.stringify(top);
    
    if(top!="") {
      this.getTops().then(data => {
        if(data) {
          this.topping = data;
          this.topping = this.topping.concat("{"+top+"}:");
          
          console.log("Toppings: "+this.topping);
          this.storage.set('toppings',JSON.stringify(this.topping));
        }
        else {
          this.topping = "{"+top+"}:";
          this.storage.set('toppings',JSON.stringify(this.topping));
        }
      });

      this.item.quantity++;
        
      console.log("Items: "+JSON.stringify(this.item));
      if(this.item.quantity >= 1) {
        this.userData.getMeals().then(data => {
          this.itemList = data;
        if(top) {
            if(this.itemList.length == 0) {
              this.itemList.push(this.item);
              this.storage.set('meal',JSON.stringify(this.itemList));
            }
            else {
              if(!(this.itemList.some(a => a.prod_name.includes(this.item.prod_name)))) {
                this.itemList = this.itemList.concat(this.item);
                this.storage.set('meal',JSON.stringify(this.itemList));
              }
              else {
          //console.log("Meals: "+JSON.stringify(this.itemList));

          var index;
          this.itemList.some(function(entry, i){
            if( entry.prod_name == "Pancakes" ) {
              index = i;
              return true;
            }
          });

          this.itemList[index].quantity = this.item.quantity;
          //console.log("Item List: "+JSON.stringify(this.itemList[index]));

          //this.storage.set('cartCount',JSON.stringify(this.itemList.length));
          this.storage.set('meal',JSON.stringify(this.itemList));
          }
        }
      }
    }); 
    //this.events.publish('cart:updated',++this.count);
  } 

     this.viewCtrl.dismiss();
    }
    else if(combo!="") {

      this.getMeal().then(data => {
        if(data) {
          this.meal = data;
          this.meal = this.meal.concat("{"+combo+"}"+":");

          console.log("Combo: "+this.meal);
          this.storage.set('combo',JSON.stringify(this.meal));
        }
        else {
          this.meal = "{"+combo+"}"+":";
          this.storage.set('combo',JSON.stringify(this.meal));
        }
      });

      this.item.quantity++;
        
      console.log("Items: "+JSON.stringify(this.item));

      if(this.item.quantity >= 1) {
        if(combo) {
        this.userData.getMeals().then(data => {
          this.itemList = data;
          console.log("Item List: "+this.itemList);
          if(this.itemList.length == 0) {
            this.itemList.push(this.item);
            this.storage.set('meal',JSON.stringify(this.itemList));
          }
          else {
            this.itemList = this.itemList.concat(this.item);

            console.log("Meals: "+JSON.stringify(this.itemList));

            var index;
            this.itemList.some(function(entry, i) {
              if( entry.prod_name == "Combo of any 4" ) {
                index = i;
                return true;
              }
            });

            this.itemList[index].quantity = this.item.quantity;
            console.log("Item List: "+JSON.stringify(this.itemList[index]));

            //this.storage.set('cartCount',JSON.stringify(this.itemList.length));
            this.storage.set('meal',JSON.stringify(this.itemList));
          }
        }); 
      }
      //this.events.publish('cart:updated',++this.count);
    } 
      this.viewCtrl.dismiss();
    }
}

  getTops(): Promise<any> {
    return this.storage.get('toppings').then(value => {
      return JSON.parse(value);
    });
    
  }

  getMeal() {
    return this.storage.get('combo').then(value => {
      return JSON.parse(value);
    })
  }
}
