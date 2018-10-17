import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { HelpComponent } from './help/help.component';
import { MenuComponent } from './menu/menu.component';
import { HomeModule } from './home/home.module';
import { ContactModule } from './contact/contact.module';
import { HelpModule } from './help/help.module';
import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { FilmModule } from './film/film.module';
import { ObservableModule } from './observable/observable.module';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    HomeModule,
    HelpModule,
    HttpClientModule,
    FilmModule,
    ObservableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
