import { NgModule } from '@angular/core';
import { ContactComponent } from './contact.component';
import { Routes, RouterModule } from '@angular/router';
import { ContactRoutingModule } from './contact-routing.module';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  { path: "", component: ContactComponent},

];

@NgModule({
  imports: [
    SharedModule,
    ContactRoutingModule
  ],
  declarations: [ContactComponent]
})
export class ContactModule { }
