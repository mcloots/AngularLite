import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TdFormComponent } from './td-form/td-form.component';
import { TdFormsRoutingModule } from './td-forms-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    TdFormsRoutingModule,
    SharedModule
  ],
  declarations: [TdFormComponent]
})
export class TdFormsModule { }
