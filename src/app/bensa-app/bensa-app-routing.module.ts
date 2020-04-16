import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BensaAppPage } from './bensa-app.page';

const routes: Routes = [
  {
    path: '',
    component: BensaAppPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BensaAppPageRoutingModule {}
