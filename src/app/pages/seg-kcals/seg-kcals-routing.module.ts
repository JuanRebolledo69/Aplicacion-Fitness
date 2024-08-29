import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SegKcalsPage } from './seg-kcals.page';

const routes: Routes = [
  {
    path: '',
    component: SegKcalsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SegKcalsPageRoutingModule {}
