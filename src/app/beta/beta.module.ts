import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BetaRoutingModule } from './beta-routing.module';
import { BetaComponent } from './beta.component';
import { BetaOneComponent } from './beta-one/beta-one.component';
import { BetaTwoComponent } from './beta-two/beta-two.component';

@NgModule({
  imports: [
    CommonModule,
    BetaRoutingModule
  ],
  declarations: [
    BetaComponent,
    BetaOneComponent,
    BetaTwoComponent
  ]
})
export class BetaModule { }
