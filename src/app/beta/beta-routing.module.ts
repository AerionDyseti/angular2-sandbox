import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BetaComponent } from './beta.component';
import { BetaOneComponent } from './beta-one/beta-one.component';
import { BetaTwoComponent } from './beta-two/beta-two.component';

const routes: Routes =  [
  {
    path: 'beta',
    component: BetaComponent,
    children: [
      { path: 'one', component: BetaOneComponent },
      { path: 'two', component: BetaTwoComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class BetaRoutingModule { }
