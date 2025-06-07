import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuscarProductoPageRoutingModule } from './buscar-producto-routing.module';
import { HttpClientModule } from '@angular/common/http';


import { BuscarProductoPage } from './buscar-producto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuscarProductoPageRoutingModule,
    HttpClientModule,
    
  ],
  declarations: [BuscarProductoPage]
})
export class BuscarProductoPageModule {}
