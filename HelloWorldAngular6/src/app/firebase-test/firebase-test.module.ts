import { NgModule } from '@angular/core';
import { FirebaseComponent } from './firebase/firebase.component';
import { SharedModule } from '../shared/shared.module';
import { TeamsService } from './services/teams.service';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [FirebaseComponent],
  providers: [TeamsService]
})
export class FirebaseTestModule { }
