import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { Geolocation } from '@ionic-native/geolocation';

/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

  declare var google;

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
    this.loadMap();
  }

  loadMap() {


    let latLng = new google.maps.LatLng(18.491422,73.821518);

    let mapOptions = {
      center: latLng,
      zoom: 17,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement,mapOptions);
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.Drop,
      position: new google.maps.LatLng(18.491422,73.821518)
    });
    console.log(marker);
  }
}

