import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { LoadingController, ActionSheetController } from 'ionic-angular';

import { ConferenceData } from '../../providers/conference-data';
import { UserData } from '../../providers/user-data';
import { TimePage } from '../time/time';
import { ToppingsPage } from '../toppings/toppings';

import { Platform, NavParams, ViewController, NavController, ModalController, ModalOptions, ToastController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { Storage } from '@ionic/storage';
import { NewToppingsPage } from '../new-toppings/new-toppings';
//import { SchedulePage } from '../schedule/schedule';

@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})

export class MapPage implements OnInit {
  
  items: any = [];
  static total = 0;
  temp: any;
  itemList: any = [];
  drawerOptions: any;
  toppings: any = [];
  top: any = [];
  value: any = [];
  data: any = [];


  myModalOptions: ModalOptions = {
    enableBackdropDismiss: false,
    cssClass : 'pricebreakup'
  };

  @ViewChild('mapCanvas') mapElement: ElementRef;
  constructor(public confData: ConferenceData,
              public platform: Platform,
              public navParams: NavParams,
              public viewCtrl: ViewController,
              public storage: Storage,
              public location: Location,
              public loadingCtrl: LoadingController,
              public toastCtrl: ToastController,
              public navCtrl: NavController,
              public modalCtrl: ModalController,
              public actionSheetCtrl: ActionSheetController,
              public userData: UserData
            ) {
                //this.getMealsData();
                //this.showTotal();
                MapPage.total = 0;

                let loader = this.loadingCtrl.create({
                  content: "Please wait...",
                  duration: 200
                });
                loader.present();

              }

  ngOnInit() {}

  ionViewWillEnter() {
    
    this.userData.getToppings().then(data => {
      this.top = data;
      //console.log("Data: "+JSON.stringify(this.top));
      this.getMealsData(this.top);
//      this.value = this.top[0].tops;
//      console.log("Value: "+this.value);
      
/*
    this.data = this.items.map(function(e1) {
      var o = Object.assign({},e1);
      if(o.prod_name == "Pancakes" || o.prod_name == "Combo of any 4")
        o.quantity = "0";
      else
        o.quantity = "1";
      o.total = "0";

      return o;
    })
*/

    })
  }

  getMealsData(top: any) {
    console.log("Top Array: "+JSON.stringify(top));
    this.userData.hasLoggedIn().then(data => {
      if(data) {
        this.userData.getMeals().then(mdata => {
          if(mdata)
            this.data = mdata;

            console.log("Cart Items: "+JSON.stringify(this.data));
          
/*          this.data = this.items.map(function(e1) {
            var o = Object.assign({},e1);
            if(o.prod_name == "Pancakes")
              o.toppings = "";

            return o;
          })

          let i=0;
          this.data.forEach(value => {
            if(value.prod_name == "Pancakes") {
              value.toppings = top[i++].tops;
            }
          })

          //console.log("Data: "+JSON.stringify(this.data));
*/        if(this.data.length == 0) 
            this.data = null;
          else
            this.storage.set('meal',JSON.stringify(this.data));
        });
      }
      else {
        this.userData.getMeals().then(data => {
          this.data = data;
          
        });      
      }
    })
  }

  increment(ev:any,item:any) {

    ev.stopPropagation();
 
    if(item.prod_name == "Pancakes" || item.prod_name == "Combo of any 4") {
      let modal = this.modalCtrl.create(ToppingsPage, {meal: item}, this.myModalOptions);
      modal.present();
      
      modal.onWillDismiss((data: any[]) => {
        if (data) {
          this.navCtrl.setRoot(MapPage);
        }
      });

    }
    else {
      item.quantity++;
      item.total = (item.quantity * item.mrp);

      this.userData.getMeals().then(data => {
        this.itemList = data;

        var index;
        this.itemList.some(function(entry, i) {
          if( entry.prod_name == item.prod_name) {
            index = i;
            return true;
          }
        });

        this.itemList[index].quantity = item.quantity;
        this.storage.set('meal',JSON.stringify(this.itemList));
      });
    }
  }

  decrement(ev:any,item:any) {
    ev.stopPropagation();

    if(item.prod_name == "Pancakes") {
      this.userData.removeToppings(item);
    }
    else if(item.prod_name == "Combo of any 4") {
      this.userData.removeMealData(item.prod_name);
    }

    console.log("Item Quantity: "+item.quantity);
    this.userData.getMeals().then(data => {
      this.itemList = data;

    if(item.prod_name !== "Pancakes" && item.quantity>0 && item.quantity!=1) {

      item.quantity--;
      item.total = (item.quantity * item.mrp);
      //if(item.prod_name == "Pancakes" || item.prod_name == "Combo of any 4") {

          var index;
          this.itemList.some(function(entry, i) {
            if( entry.prod_name == item.prod_name ) {
              index = i;
              return true;
            }
          });

          console.log("---------- In If");
          this.itemList[index].quantity = item.quantity;
          this.storage.set('meal',JSON.stringify(this.itemList));
          
      
        //this.navCtrl.setRoot(MapPage);
    }
    else if(item.quantity == 1) {
      item.quantity--;
      item.total=0;
      console.log("-------------------  In Else");
      this.userData.removeMeal(item);

      this.navCtrl.setRoot(MapPage);
    }
    else if(item.prod_name == 'Pancakes') {

      console.log("Item: "+JSON.stringify(item));
      console.log("Item List: "+JSON.stringify(this.itemList));
      item.quantity--;
      item.total = (item.quantity * item.mrp);

      this.itemList.some(function(entry, i) {
        if( entry.toppings == item.toppings ) {
          index = i;
          return true;
        }
      });

      this.itemList[index].quantity = item.quantity;
      this.storage.set('meal',JSON.stringify(this.itemList));
    }
    
  });
    //console.log("Decrement: "+item.total);
//    MapPage.total -= item.total;
  }

  order(meals: any) {

    MapPage.total = 0;
    //alert("Final Order: "+JSON.stringify(meals));

    meals.forEach(data => {
      if(data.total==0)
        data.total = (data.mrp * data.quantity);
      MapPage.total += data.total;
    });

    this.userData.hasLoggedIn().then(data => {

      if(data) {
        //this.getMealsData();
        //console.log("Meals: "+JSON.stringify(meals));

        this.storage.remove('meal');
        this.storage.set('meal',JSON.stringify(meals));

        
        let modal = this.modalCtrl.create(TimePage, {item: meals, total: MapPage.total}, this.myModalOptions);
        modal.present();

      }
      else {
        let toast = this.toastCtrl.create({
          message: 'Please log in to continue',
          duration: 8000,
          showCloseButton: true,
          closeButtonText: 'Ok'
        });

        toast.onDidDismiss((data,role) => {
          console.log("Success: "+data);
          if (role == 'close') {
            this.navCtrl.push(LoginPage,{meal: meals});
          }
        });
        toast.present();
      }
    });

  }

  /*showTotal() {
    this.userData.getMeals().then(data => {
      this.items = data;

      this.items.forEach(data =>{
          MapPage.total += data.total; 
      });
    });

  }
*/
  get staticTotal() {
    return MapPage.total;
  }
/*
  home() {
    this.navCtrl.setRoot(SchedulePage);
  }
  */

  customise(item: any) {
    
    if(item.prod_name == 'Pancakes') {
/*        this.userData.getToppings().then(data => {
        this.toppings = data;
      })
*/
      let modal = this.modalCtrl.create(NewToppingsPage,{meal: item},this.myModalOptions);
      modal.present();

    }
    else if(item.prod_name == 'Combo of any 4') {
      let actionSheet = this.actionSheetCtrl.create({
        title: item.prod_name,
        cssClass: 'action-sheet',
        buttons:[{
          text:'Change Meal Options',
          handler: () => {
            
          }
        }]

      });
      actionSheet.present();        
    }
  }
}
