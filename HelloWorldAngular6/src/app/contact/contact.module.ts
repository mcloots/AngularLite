import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { Routes, RouterModule } from '@angular/router';
import { ContactRoutingModule } from './contact-routing.module';

const routes: Routes = [
  { path: "", component: ContactComponent},

];

@NgModule({
  imports: [
    CommonModule, ContactRoutingModule
  ],
  declarations: [ContactComponent]
})
export class ContactModule { }
