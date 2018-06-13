import { Component, ViewChild } from '@angular/core';

import { NavParams, Content, Events } from 'ionic-angular';

import { MapPage } from '../map/map';
import { SchedulePage } from '../schedule/schedule';
import { SpeakerListPage } from '../speaker-list/speaker-list';
//import { OffersPage } from '../offers/offers';

import { UserData } from '../../providers/user-data';
import { AboutPage } from '../about/about';

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

  constructor(navParams: NavParams, public events: Events, public userData: UserData) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }

  @ViewChild(Content) content: Content;
  

  scroll() {
    this.content.scrollToTop();
    
    //this.tab1Root.scroll();

    //this.events.publish('scrollToTop');
  }

  ionViewDidEnter() {
  }



}
