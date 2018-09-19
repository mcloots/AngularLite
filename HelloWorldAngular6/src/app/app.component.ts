import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HelloWorldAngular6';
  isActive: boolean = true;
  studenten: string[] = ["Jos","Louis","Bert"];
}
