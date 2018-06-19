import { Component, ViewChild } from '@angular/core';

import { NavParams, Content, Events } from 'ionic-angular';

import { MapPage } from '../map/map';
import { SchedulePage } from '../schedule/schedule';
import { SpeakerListPage } from '../speaker-list/speaker-list';
//import { OffersPage } from '../offers/offers';

import { UserData } from '../../providers/user-data';
import { AboutPage } from '../about/about';
import { Storage } from '@ionic/storage';

@Component({
  templateUrl: 'tabs-page.html'
})


export class TabsPage {
  // set the root pages for each tab
  tab1Root: any = SchedulePage;
  tab2Root: any = SpeakerListPage;
  tab3Root: any = MapPage;
  tab4Root: any = AboutPage;
  mySelectedIndex: number;
  badge: any;
  

  constructor(navParams: NavParams, public events: Events, public userData: UserData, public storage: Storage) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;

/*    this.events.subscribe('cart:updated', (count) => {
      this.cartCount = count;
    });
*/
  }

  @ViewChild(Content) content: Content;


  ionViewDidEnter() {
  }

  cartCount() {
    //let count = this.storage.get('cartCount');
    //return count;
  }



}
