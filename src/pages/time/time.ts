import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

import { UserData } from '../../providers/user-data';

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
  data: any;
  toppings: any;
  meal: any = [];
  quantities: any = [];
  total: any;

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public userData: UserData) {
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

      console.log("Meal: "+JSON.stringify(this.meal));

        this.meal.forEach(function(value) {
          delete value.V;
          delete value.N;
        });
        
      console.log("Updated Meal: "+JSON.stringify(this.meal));  
    })
  }
}
