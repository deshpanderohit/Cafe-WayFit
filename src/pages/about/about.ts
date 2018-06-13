import { Component, ViewChild } from '@angular/core';
import { PopoverController, Slides } from 'ionic-angular';

import { PopoverPage } from '../about-popover/about-popover';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})



export class AboutPage {
  conferenceDate = '2047-05-17';
  gym: string;

  @ViewChild('slider') slider: Slides;
  constructor(public popoverCtrl: PopoverController) {
    this.gym="programs";
  }

  presentPopover(event: Event) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({ ev: event });
  }

  ngAfterViewInit() {
    this.slider.autoHeight = true;
  }

  next() {
    this.slider.slideNext();
  }

  prev() {
    this.slider.slidePrev();
  }
  
}
