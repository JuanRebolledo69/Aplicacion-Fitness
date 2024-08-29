import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SegKcalsPageRoutingModule } from './seg-kcals-routing.module';

import { SegKcalsPage } from './seg-kcals.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SegKcalsPageRoutingModule
  ],
  declarations: [SegKcalsPage]
})
export class SegKcalsPageModule {}
