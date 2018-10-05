import { NgModule } from '@angular/core';

import { MatButtonModule, MatSidenavModule, MatListModule, MatToolbarModule } from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule
  ],
  exports: [
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule
  ]
})
export class MaterialModule { }
