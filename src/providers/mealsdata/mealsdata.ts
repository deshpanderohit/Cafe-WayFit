import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';

/*
  Generated class for the MealsdataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class MealsdataProvider {

  constructor(public http: Http, public storage: Storage) {
    console.log('Hello MealsdataProvider Provider');
  }

  getJsonData(url: string) {

    return this.http.get(url).map(res => res.json());
  }

  getCategories() {
    return this.http.get('http://wayfit.in/API/IndexDiet.php?request=categoryList').map(result => result.json());
  }

  getTracks() {
    return this.storage.get('excludedTracks').then(value => {
      return JSON.parse(value);
    });
  }


}
