import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Error404Component } from './error-404/error-404.component';

const routes: Routes = [
  { path: '**', component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
