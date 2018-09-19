import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HelloWorldAngular6';
  colorClass: string = "green";
  isRed: boolean = true;

  arrayClasses: string [] = ['red','bold'];

  rainbow: string [] = ['red','orange',"yellow","green","blue","indigo","violet"];

  number = 2;
}
