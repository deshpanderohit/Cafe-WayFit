import { Component } from '@angular/core';
import { IonicPage,AlertController, NavController, NavParams, ModalController, ModalOptions, ToastController, ViewController, Events } from 'ionic-angular';

import { MealsdataProvider } from '../../providers/mealsdata/mealsdata';
import { UserData } from '../../providers/user-data';

import { DescriptionPage } from '../description/description';
import { MapPage } from '../map/map';
import { ToppingsPage } from '../toppings/toppings';
//import { ItemsPage } from '../items/items';

/**
 * Generated class for the SoupsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-soups',
  templateUrl: 'soups.html',
  providers:[MealsdataProvider],
})
export class SoupsPage {
  category: any;
  value: any;
  results: any;
  items: any;
  toast: any;
  id: any;
  data: any
  categories: any;
  count = 0;


  myModalOptions: ModalOptions = {
    enableBackdropDismiss: false,
    cssClass : 'pricebreakup'
  };

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController,
              public meals: MealsdataProvider,
              public modalCtrl: ModalController,
              public toastCtrl: ToastController,
              public userData: UserData,
              public events: Events,
              public alertCtrl: AlertController) {
    
    
        this.category = navParams.get('item');
        this.value = this.category.cat_name;
        this.id = this.category.cat_id;
        

        let url = 'http://wayfit.in/API/IndexDiet.php?request=foodType&obj={"cat_id":'+this.id+'}';
          
        this.meals.getJsonData(url).subscribe(

          result => {
            
            this.results = JSON.stringify(result);
            this.items = JSON.parse(this.results);
            //console.log("Success : "+ this.items[0].prod_name);
            this.initialize();

          });
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SoupsPage');
  }

  initialize() {
    this.data = this.items;
    this.data = this.items.map(function(e1) {
        var o = Object.assign({},e1);
        if(o.prod_name == "Pancakes" || o.prod_name == "Combo of any 4") {
          o.quantity = "0";
          o.toppings = "";
        }
        else
          o.quantity = "1";
        o.total = "0";

        return o;
    })
  }

  description(ev:any,item: any) {

    ev.stopPropagation();

    let modal = this.modalCtrl.create(DescriptionPage, {item: item}, this.myModalOptions);
    modal.present();

  }

  getMeal(ev: any) {

    this.initialize();
    let val = ev.target.value;

    if (val && val.trim() != '') {
      this.data = this.data.filter((item) => {
        return (item.prod_name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
      //this.getData(this.items.id);
    }
 }

  dismiss(data?: any) {
    this.viewCtrl.dismiss(data);
  }

  add(ev:any,item: any) {

    ev.stopPropagation();
    
    this.userData.hasLoggedIn().then((data) =>{

      if(data) {

          if(item.prod_name == "Pancakes" || item.prod_name == "Combo of any 4") {
            let modal = this.modalCtrl.create(ToppingsPage, {meal: item}, this.myModalOptions);
            modal.present();
          }      
          else {

            this.userData.addToCart(item);
            //this.events.publish('cart:updated',++this.count);

            if(this.toast != null) 
              this.toast.dismiss();
            this.toast = this.toastCtrl.create({
            message: 'Product added to cart',
            showCloseButton: true,
            closeButtonText: 'View'
          });

          this.toast.onDidDismiss((data,role) => {
            console.log("Success: "+data);
            if (role == 'close') {
              this.navCtrl.push(MapPage);  
            }
          });
          this.toast.present();
        }

      }
      else {


        if(item.prod_name == "Pancakes" || item.prod_name == "Combo of any 4") {
          let modal = this.modalCtrl.create(ToppingsPage, {meal: item}, this.myModalOptions);
          modal.present();
          
        }      
        else {
          this.userData.addToCart(item); 

          if(this.toast != null) 
          this.toast.dismiss();
          this.toast = this.toastCtrl.create({
            message: 'Product added to cart',
            showCloseButton: true,
            closeButtonText: 'View'
          });

          this.toast.onDidDismiss((data,role) => {
            console.log("Success: "+data);
            if (role == 'close') {
              this.navCtrl.push(MapPage);
            }
          });
          this.toast.present();
        }
      }
    });


  }

}
