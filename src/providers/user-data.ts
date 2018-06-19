import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Events, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';



@Injectable()
export class UserData {
  _favorites: string[] = [];
  HAS_LOGGED_IN = 'hasLoggedIn';
  items: any;
  product: any = [];
  data: any = [];
  HAS_SEEN_TUTORIAL = 'hasSeenTutorial';
  topping: any = [];
  toppingsFlag = 't';
  mealFlag = 't'
  meal: any = [];
  temp: any = [];
  count = 0;

  constructor(
    public events: Events,
    public storage: Storage,
    public loadingCtrl: LoadingController,
    public http: Http
  ) {
    this.toppingsFlag = 't';
    this.mealFlag = 't';
  }

  ionViewWillEnter() {
    this.toppingsFlag = 't';
    this.mealFlag = 't';
  }

  hasFavorite(sessionName: string): boolean {
    return (this._favorites.indexOf(sessionName) > -1);
  };

  addFavorite(sessionName: string): void {
    this._favorites.push(sessionName);
  };

  removeFavorite(sessionName: string): void {
    let index = this._favorites.indexOf(sessionName);
    if (index > -1) {
      this._favorites.splice(index, 1);
    }
  };

  login(username: string): void {
    this.storage.set(this.HAS_LOGGED_IN, true);
    this.setUsername(username);
    this.events.publish('user:login');
  };

  signup(username: string): void {
    this.storage.set(this.HAS_LOGGED_IN, true);
    this.setUsername(username);
    this.events.publish('user:signup');
  };

  logout(): void {
    this.storage.remove(this.HAS_LOGGED_IN);
    this.storage.remove('username');
    this.events.publish('user:logout');
  };

  setUsername(username: string): void {
    this.storage.set('username', username);
  };

  addToCart(item: any) {

    this.getMeals().then(data => {

      delete item.prod_desc;
      delete item.prod_img;

      if(data)
        this.product = data;
      else {
        if(data == null)
          this.product = [];
        else
          this.product = this.product.concat(item);
      }

        if(!(this.product.some(a => a.prod_name.includes(item.prod_name))))
          this.product = this.product.concat(item);
        
        //this.storage.set('cartCount',JSON.stringify(this.product.length));
        this.storage.set('meal',JSON.stringify(this.product));
    }); 
  }

  getMeals(): Promise<any> {
    return this.storage.get('meal').then(value => {
      return JSON.parse(value);
    });
    
  }

  removeMeal(item: any) {
    //this.storage.remove(this.storage.keys(item.prod_id));
      let loader = this.loadingCtrl.create({
        content: "Please wait...",
        duration: 300
      });
      loader.present();

      this.getMeals().then(data => {
        this.data = data;

      var removeIndex = this.data.map(function(item) { return item.prod_id }).indexOf(item.prod_id);
      this.data.splice(removeIndex,1);

      if(this.data.length == 0) {
        //this.storage.clear();
        this.data = [];
        this.data.splice(0,this.data.length);
        this.storage.remove('meal');
          if(item.prod_name == "Pancakes" && item.quantity == "0")
            this.storage.remove('toppings');
          else if(item.prod_name == "Combo of any 4" && item.quantity == "0")
            this.storage.remove('combo');
      }
      else
        this.storage.set('meal',JSON.stringify(this.data));
    });
   }

   getToppings(): Promise<any> {
    return this.storage.get('toppings').then(value => {
      return JSON.parse(value);
    });
  }

  getMealData(): Promise<any> {
    return this.storage.get('combo').then(value => {
      return JSON.parse(value);
    });
  }


  removeToppings(item: any) {
    console.log("Item: "+item);
    this.getToppings().then(data => {
      this.topping = data;

      if(this.toppingsFlag == 't') {
//        console.log("Pancake Toppings: "+this.topping);

        var array = this.topping.split(":");
        var pop = array.pop();
        var popped = array.pop();

        this.storage.set('toppings',JSON.stringify(array));
        console.log("Pop 1: "+pop);
        console.log("Pop 2: "+popped);
        //console.log("Remove item: "+array);
        this.toppingsFlag = 'f';
        
      }
      else {
        if(this.topping.length == 1) {
          var t = this.topping.pop();
          console.log("Popped: "+t);
          this.storage.remove('toppings');
          this.toppingsFlag = 't';
        }
        else {
          t = this.topping.pop();
          console.log("Popped: "+t);
          this.storage.set('toppings',JSON.stringify(this.topping));
        }
      }

    });
  }

  removeMealData(item: any) {

    console.log("Meal Data: "+item);

    this.getMealData().then(data => {
      this.meal = data;
  
      console.log("Meal Toppings: "+this.meal);
      if(this.mealFlag == 't') {
      //  console.log("Meal Toppings: "+this.meal);
        var array = this.meal.split(":");

        var pop = array.pop();
        var popped = array.pop();
        
        this.storage.set('combo',JSON.stringify(array));
        console.log("Pop 1: "+pop);
        console.log("Pop 2: "+popped);
    //    console.log("Remove item: "+array);
        this.mealFlag = 'f';
        
      }
      else {
        if(this.meal.length == 1) {
          var m = this.meal.pop();
          console.log("Popped: "+m);
          this.storage.remove('combo');
          this.mealFlag = 't';
        }
        else {
          m = this.meal.pop();
          console.log("Popped: "+m);
          this.storage.set('combo',JSON.stringify(this.meal));
        }
      }
    })
  }
  
  getUsername(): Promise<string> {
    return this.storage.get('username').then((value) => {
      return value;
    });
  };

  hasLoggedIn(): Promise<boolean> {
    return this.storage.get(this.HAS_LOGGED_IN).then((value) => {
      return value;
    });
  };

  checkHasSeenTutorial(): Promise<string> {
    return this.storage.get(this.HAS_SEEN_TUTORIAL).then((value) => {
      return value;
    });
  };

  addAPI(item: any) {
    alert("JSON : "+ JSON.stringify(item));
    this.items = JSON.parse(JSON.stringify(item));
    return this.http.post('',this.items).map(res => res.json());
  }
}
