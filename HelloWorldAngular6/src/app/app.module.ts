import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { HelpComponent } from './help/help.component';

import { MatSidenavModule, MatListModule, MatCardModule, MatButtonModule, MatToolbarModule } from '@angular/material';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'help', component: HelpComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    HelpComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
