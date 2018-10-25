import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxFormComponent } from './rx-form/rx-form.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [RxFormComponent]
})
export class RxFormsModule { }
