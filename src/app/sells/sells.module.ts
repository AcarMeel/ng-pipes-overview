import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeNgModule } from './../prime-ng/prime-ng.module';

import { NumbersComponent } from './pages/numbers/numbers.component';
import { NotCommonComponent } from './pages/not-common/not-common.component';
import { BasicsComponent } from './pages/basics/basics.component';
import { OrderComponent } from './pages/order/order.component';

const components = [
  BasicsComponent,
  NumbersComponent,
  NotCommonComponent,
  OrderComponent
];

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports: [
   ...components
  ],
})
export class SellsModule {}
