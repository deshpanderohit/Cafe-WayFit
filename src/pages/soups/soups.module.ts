import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SoupsPage } from './soups';

@NgModule({
  declarations: [
    SoupsPage,
  ],
  imports: [
    IonicPageModule.forChild(SoupsPage),
  ],
})
export class SoupsPageModule {}
