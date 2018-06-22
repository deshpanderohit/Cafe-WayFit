import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewToppingsPage } from './new-toppings';

@NgModule({
  declarations: [
    NewToppingsPage,
  ],
  imports: [
    IonicPageModule.forChild(NewToppingsPage),
  ],
})
export class NewToppingsPageModule {}
