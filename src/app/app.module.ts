import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AlphaModule } from './alpha/alpha.module';
import { BetaModule } from './beta/beta.module';

import { AppComponent } from './app.component';
import { Error404Component } from './error-404/error-404.component';

@NgModule({
  declarations: [
    AppComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlphaModule,
    BetaModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
