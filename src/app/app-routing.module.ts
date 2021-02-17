import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderComponent } from './sells/pages/order/order.component';
import { NotCommonComponent } from './sells/pages/not-common/not-common.component';
import { NumbersComponent } from './sells/pages/numbers/numbers.component';
import { BasicsComponent } from './sells/pages/basics/basics.component';

const routes: Routes = [
  {
    path: '',
    component: BasicsComponent,
    pathMatch: 'full'
  },
  {
    path: 'numbers',
    component: NumbersComponent
  },
  {
    path: 'not-common',
    component: NotCommonComponent
  },
  {
    path: 'order',
    component: OrderComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
