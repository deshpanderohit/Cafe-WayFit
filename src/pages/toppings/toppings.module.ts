import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ToppingsPage } from './toppings';

@NgModule({
  declarations: [
    ToppingsPage,
  ],
  imports: [
    IonicPageModule.forChild(ToppingsPage),
  ],
})
export class ToppingsPageModule {}
