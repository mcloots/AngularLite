import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {
  filmNaam: string;
  response: any;

  constructor(private _http: HttpClient) { }

  ngOnInit() {
  }

  zoekFilm() {
    //API aanroepen
    this._http.get("http://www.omdbapi.com/?t=" + this.filmNaam + "&apikey=48cc3813")
      .subscribe(
        (res) => {
          this.response = res;
        }
      );
  }

}
