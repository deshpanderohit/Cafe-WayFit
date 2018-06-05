import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CusthomePage } from './custhome';

@NgModule({
  declarations: [
    CusthomePage,
  ],
  imports: [
    IonicPageModule.forChild(CusthomePage),
  ],
})
export class CusthomePageModule {}
