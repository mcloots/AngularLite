import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HelpComponent } from './help/help.component';
import { FilmComponent } from './film/film/film.component';
import { ObservableComponent } from './observable/observable/observable.component';
import { RxFormComponent } from './rx-forms/rx-form/rx-form.component';
import { FirebaseComponent } from './firebase-test/firebase/firebase.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', loadChildren: './contact/contact.module#ContactModule' },
  { path: 'observable', component: ObservableComponent },
  { path: 'help', component: HelpComponent },
  { path: 'film', component: FilmComponent },
  { path: 'tdforms', loadChildren: './td-forms/td-forms.module#TdFormsModule' },
  { path: 'rxforms', component: RxFormComponent },
  { path: 'firebase', component: FirebaseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
