import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';

import { UserData } from '../../providers/user-data';
import { OrderPage } from '../order/order';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the TimePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-time',
  templateUrl: 'time.html',
})
export class TimePage {

  timeslots: any;
  time: any;
  items: any;
  toast: any;
  data: any;
  toppings: any;
  meal: any = [];
  quantities: any = [];
  total: any;
  final_top: any;
  final_combo: any;

  initialize() {

    this.timeslots = [
      { "st": "6 AM", "et": "7 AM" },
      { "st": "7 AM", "et": "8 AM" },
      { "st": "8 AM", "et": "9 AM" },
      { "st": "9 AM", "et": "10 AM" },
      { "st": "10 AM", "et": "11 AM" },
      { "st": "11 AM", "et": "12 PM" },
      { "st": "12 PM", "et": "1 PM" },
      { "st": "1 PM", "et": "2 PM" },
      { "st": "2 PM", "et": "3 PM" },
      { "st": "3 PM", "et": "4 PM" },
      { "st": "4 PM", "et": "5 PM" },
      { "st": "5 PM", "et": "6 PM" },
      { "st": "6 PM", "et": "7 PM" },
      { "st": "7 PM", "et": "8 PM" },
      { "st": "8 PM", "et": "9 PM" },
      { "st": "9 PM", "et": "10 PM" },
      { "st": "10 PM", "et": "11 PM" }
    ];

}

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public userData: UserData, public storage: Storage, public toastCtrl: ToastController) {
    this.initialize();
    this.getMealsData();
    JSON.stringify(this.timeslots);
    this.total = navParams.get("total");
    this.data = navParams.get("item");
    //alert("Meals: "+JSON.stringify(this.data));

    this.data.forEach(data => {
      this.quantities.push(data.prod_id,data.quantity);
    });
   
//    alert("Quantity Array: "+JSON.stringify(this.quantities));

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TimePage');
  }

  dismiss(data?: any) {
    this.viewCtrl.dismiss(data);
  }

  slots(time: any) {
    alert("Time : "+JSON.stringify(time));
  }

  getMealsData() {
    this.userData.getMeals().then(data => {
        this.items = data;

        //alert("Item: "+JSON.stringify(this.items));
    });

  }

  order(total: any, timeslot: any) {
    console.log("Total Amount: "+total);
    console.log("TimeSlot ST: "+timeslot.st);
    console.log("TimeSlot ET: "+timeslot.et);

    this.userData.getMeals().then(data => {
      this.meal = data;

      //console.log("Meal: "+JSON.stringify(this.meal));

        this.meal.forEach(function(value) {
          delete value.prod_desc;
          delete value.prod_img;
          delete value.mrp;

          if( value.prod_name == "Pancake") {
            this.userData.getToppings().then(data => {
              this.final_top = data;

              this.storage.remove('toppings');
            })
          }
          else if( value.prod_name == "Combo of any 4" ) {
            this.userData.getMealsData().then(data => {
              this.final_combo = data;

              this.storage.remove('combo');
            })
          }
         
        });
        this.storage.remove('meal');
        this.toast = this.toastCtrl.create({
          message: 'Your order has been placed!',
          showCloseButton: true,
          closeButtonText: 'View'
        });

        this.toast.onDidDismiss((data,role) => {
          console.log("Success: "+data);
          if (role == 'close') {
            this.navCtrl.push(OrderPage,{meal: this.meal,toppings: this.final_top,combo: this.final_combo,timeslot: timeslot,total: this.total});
          }
        });
        this.toast.present();

    
      //console.log("Updated Meal: "+JSON.stringify(this.meal));
      
      
    })

    
    //this.storage.remove('meal');
    
  }
}
