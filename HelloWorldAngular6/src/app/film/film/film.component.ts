import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FilmModel } from '../models/film.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {
  filmNaam: string;
  response;
  filmModel: FilmModel;

  constructor(private _http: HttpClient) { }

  ngOnInit() {
  }

  zoekFilm() {
    this._http.get("http://www.omdbapi.com/?t="
      + this.filmNaam +
      "&apikey=48cc3813").subscribe(res => {
        this.response = res;
      });

      this._http.get("http://www.omdbapi.com/?t="
      + this.filmNaam +
      "&apikey=48cc3813")
      .pipe(
        map((data : any) => {
          let vTitle = data.Title;
          let vDirector = data.Director;
          let vActors = data.Actors.split(", ");

          return new FilmModel(vTitle,vDirector,vActors);
        })
      )
      .subscribe(res => {
        this.filmModel = res;
      });
  }
}
