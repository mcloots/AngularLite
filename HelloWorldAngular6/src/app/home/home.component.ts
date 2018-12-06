import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  firstname:string;

  constructor() { }

  ngOnInit() {
    localStorage.setItem("firstname","Michaël");

    this.firstname = localStorage.getItem("firstname");
  }

}
