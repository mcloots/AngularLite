import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HelpComponent } from './help/help.component';
import { FilmComponent } from './film/film/film.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', loadChildren: './contact/contact.module#ContactModule' },
  { path: 'help', component: HelpComponent },
  { path: 'film', component: FilmComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
