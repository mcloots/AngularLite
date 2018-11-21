import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';


@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [LoginComponent]
})
export class AuthenticationModule { }
