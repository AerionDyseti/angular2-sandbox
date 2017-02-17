import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlphaComponent } from './alpha.component';
import { AlphaOneComponent } from './alpha-one/alpha-one.component';
import { AlphaTwoComponent } from './alpha-two/alpha-two.component';

const routes: Routes =  [
  {
    path: 'alpha',
    component: AlphaComponent,
    children: [
      { path: 'one', component: AlphaOneComponent },
      { path: 'two', component: AlphaTwoComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class AlphaRoutingModule { }
