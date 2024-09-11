import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HubTicketsPage } from './hub-tickets.page';

const routes: Routes = [
  {
    path: '',
    component: HubTicketsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HubTicketsPageRoutingModule {}
