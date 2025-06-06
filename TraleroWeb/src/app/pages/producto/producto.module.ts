import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductoPageRoutingModule } from './producto-routing.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ProductoPage } from './producto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductoPageRoutingModule
  ],
  declarations: [ProductoPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]     // 👈 evita NG8001

})
export class ProductoPageModule {}
