import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BensaAppPageRoutingModule } from './bensa-app-routing.module';

import { BensaAppPage } from './bensa-app.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BensaAppPageRoutingModule
  ],
  declarations: [BensaAppPage]
})
export class BensaAppPageModule {}
