import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlphaRoutingModule } from './alpha-routing.module';
import { AlphaComponent } from './alpha.component';
import { AlphaOneComponent } from './alpha-one/alpha-one.component';
import { AlphaTwoComponent } from './alpha-two/alpha-two.component';

@NgModule({
  imports: [
    CommonModule,
    AlphaRoutingModule
  ],
  declarations: [AlphaComponent, AlphaOneComponent, AlphaTwoComponent]
})
export class AlphaModule { }
