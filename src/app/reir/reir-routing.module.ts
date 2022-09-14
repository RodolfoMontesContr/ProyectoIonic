import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReirPage } from './reir.page';

const routes: Routes = [
  {
    path: '',
    component: ReirPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReirPageRoutingModule {}
