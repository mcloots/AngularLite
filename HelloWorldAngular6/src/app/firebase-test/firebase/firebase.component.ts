import { Component, OnInit } from '@angular/core';
import { TeamsService } from '../services/teams.service';
import { Team } from '../models/team';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.css']
})
export class FirebaseComponent implements OnInit {
  teams: Observable<Team[]>;
  team = { naam: null, land: null } as Team;
  editMode: boolean = false;
  teamToEdit: any = {};

  constructor(private _teamsService: TeamsService) { }

  ngOnInit() {
    this.teams = this._teamsService.getTeams().snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          //get document data
          const data = a.payload.doc.data() as Team;
          //get id
          const id = a.payload.doc.id;
          //combine id and data
          return { id, ...data };
        })
      })
    );
  }

  edit(team: Team) {
    this.teamToEdit = team;
    this.team = team;
    this.editMode = true;
  }

  save() {
    if (this.team.naam !== null && this.team.land !== null) {
      if (!this.editMode) {
        this._teamsService.addTeam(this.team);
      } else {
        //Get the id
        let teamId = this.teamToEdit.id;
        //update the task
        this._teamsService.updateTeam(teamId, this.team);
      }
      //set edit mode to false and clear form
      this.editMode = false;
      this.team = { naam: null, land: null } as Team;
    }
  }

  delete(team) {
    //Get the team id
    let teamId = team.id;
    //delete the team
    this._teamsService.deleteTeam(teamId);
 }

}
