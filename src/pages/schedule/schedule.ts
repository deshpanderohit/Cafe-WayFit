import { Component, ViewChild } from '@angular/core';

import { AlertController, App, FabContainer, List, ModalController, NavController, ToastController, LoadingController, NavParams, Content } from 'ionic-angular';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';


import { ConferenceData } from '../../providers/conference-data';
import { UserData } from '../../providers/user-data';
import { MealsdataProvider } from '../../providers/mealsdata/mealsdata';

import { SoupsPage } from '../soups/soups';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { ScheduleFilterPage } from '../schedule-filter/schedule-filter';

@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html'
})

@Injectable()

export class SchedulePage {
  @ViewChild('scheduleList', { read: List }) scheduleList: List;
  @ViewChild(Content) content: Content;

  items: any = [];
  dayIndex = 0;
  queryText = '';
  segment = 'all';
  excludeTracks: any = [];
  shownSessions: any = [];
  groups: any = [];
  confDate: string;
  results: any = [];
  item: string;
  temp: any;
  data: any = [];
  
  
  constructor(
    public alertCtrl: AlertController,
    public app: App,
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    public navCtrl: NavController,
    public http: Http,
    public toastCtrl: ToastController,
    public confData: ConferenceData,
    public navParams: NavParams,
    public meals: MealsdataProvider,
    public user: UserData
  ) {
    this.updateTimeline();
  }

  ionViewDidLoad() {
    this.updateTimeline();
  }
   
  getItems(ev: any) {

    this.initialize();
    let val = ev.target.value;

    if (val && val.trim() != '') {
      this.data = this.data.filter((item) => {
        return (item.cat_name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  updateTimeline() {

    this.meals.getCategories().subscribe(

      data => {

        if(this.excludeTracks) {
          this.items = data;
          this.data = this.items.filter(item => !this.excludeTracks.includes(item.cat_name));
        }
        else
          this.data = data;
      });
  }

  initialize() {
    this.data = this.items;
  }

  presentFilter() {
    let modal = this.modalCtrl.create(ScheduleFilterPage, this.excludeTracks);
    modal.present();

    modal.onWillDismiss((data: any[]) => {
      if (data) {       
        this.excludeTracks = data;
        this.updateTimeline();
      }
    });

  }

  openSocial(network: string, fab: FabContainer) {
    let loading = this.loadingCtrl.create({
      content: `Posting to ${network}`,
      duration: (Math.random() * 1000) + 500
    });
    loading.onWillDismiss(() => {
      fab.close();
    });
    loading.present();
  }


  view(item: any) {
  
      this.navCtrl.push(SoupsPage,{item: item});

  }
}