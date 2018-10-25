import { NgModule } from '@angular/core';
import { TdFormComponent } from './td-form/td-form.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: "", component: TdFormComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TdFormsRoutingModule { }
