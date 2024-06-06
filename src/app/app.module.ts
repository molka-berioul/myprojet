import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/general/home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InscriptionComponent } from './modules/general/inscription/inscription.component';
import { FooterComponent } from './footer/footer.component';

import { registerLocaleData } from '@angular/common';
import *as fr from '@angular/common/locales/fr';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    InscriptionComponent,
    
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {provide: LOCALE_ID ,useValue:'fr-FR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    registerLocaleData(fr.default);
  }
 }
