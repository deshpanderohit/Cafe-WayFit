import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { LoadingController } from 'ionic-angular';

import { ConferenceData } from '../../providers/conference-data';
import { UserData } from '../../providers/user-data';
import { TimePage } from '../time/time';
import { ToppingsPage } from '../toppings/toppings';

import { Platform, NavParams, ViewController, NavController, ModalController, ModalOptions, ToastController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { Storage } from '@ionic/storage';
//import { SchedulePage } from '../schedule/schedule';

@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})

export class MapPage implements OnInit {
  
  items: any;
  static total = 0;
  temp: any;
  itemList: any = [];

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
              public userData: UserData
            ) {
                this.getMealsData();
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
    this.getMealsData();
    
  }

  getMealsData() {
    this.userData.hasLoggedIn().then(data => {
        if(data) {
          this.userData.getMeals().then(data => {
            this.items = data;
          });      
        }
        else {
          this.userData.getMeals().then(data => {
            this.items = data;
            
          });      
        }
    })
  }

  increment(ev:any,item:any) {

    ev.stopPropagation();
 
    if(item.prod_name == "Pancakes" || item.prod_name == "Combo of any 4") {
      let modal = this.modalCtrl.create(ToppingsPage, {meal: item}, this.myModalOptions);
      modal.present();
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
      this.userData.removeToppings(item.prod_name);
    }
    else if(item.prod_name == "Combo of any 4") {
      this.userData.removeMealData(item.prod_name);
    }

    if(item.quantity>0 && item.quantity!=1) {
      item.quantity--;
      item.total = (item.quantity * item.mrp);

      //if(item.prod_name == "Pancakes" || item.prod_name == "Combo of any 4") {
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
    else if(item.quantity == 1) {
      item.quantity--;
      item.total=0;
      
      this.userData.removeMeal(item);

      this.navCtrl.setRoot(MapPage);
    }
    
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
        this.getMealsData();
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
}
