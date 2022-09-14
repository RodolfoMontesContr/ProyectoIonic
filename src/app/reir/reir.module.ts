import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReirPageRoutingModule } from './reir-routing.module';

import { ReirPage } from './reir.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReirPageRoutingModule
  ],
  declarations: [ReirPage]
})
export class ReirPageModule {}
