import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HubTicketsPageRoutingModule } from './hub-tickets-routing.module';

import { HubTicketsPage } from './hub-tickets.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HubTicketsPageRoutingModule
  ],
  declarations: [HubTicketsPage]
})
export class HubTicketsPageModule {}
