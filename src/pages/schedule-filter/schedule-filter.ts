import { Component } from '@angular/core';

import { NavParams, ViewController, NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';


import { MealsdataProvider } from '../../providers/mealsdata/mealsdata';


@Component({
  selector: 'page-schedule-filter',
  templateUrl: 'schedule-filter.html'
})
export class ScheduleFilterPage {

  tracks: Array<{name: string, isChecked: boolean}> = [];
  temp: any;
  items: any;

    constructor(
    public navParams: NavParams,
    public meals: MealsdataProvider,
    public viewCtrl: ViewController,
    public storage: Storage,
    public navCtrl: NavController
  ) {
     
      let excludedTrackNames = this.navParams.data;


      this.meals.getCategories().subscribe(

        data => {

          this.items = data;


          this.items.forEach(category => {

            this.tracks.push({
              name: category.cat_name,
              isChecked: (excludedTrackNames.indexOf(category.cat_name) === -1)
            });

          });
        },

        (err) => {

          console.log("Error : "+err.name);
        },

        () => {
        }
      );
  }

    dismiss(data?: any) {
      this.viewCtrl.dismiss(data);
    
  }

  applyFilters() {

    let excludedTrackNames = this.tracks.filter(c => !c.isChecked).map(c => c.name);
    this.dismiss(excludedTrackNames);
  }

  resetFilters() {
  
    this.tracks.forEach(track => {
      track.isChecked = true;
    });
  }

}