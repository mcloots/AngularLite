import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HelloWorldAngular6';

  imageUrl = "https://angular.io/generated/images/guide/architecture/databinding.png";
  imageAlt = "Property binding";


  onButtonClick() {
    alert('Er werd op deze knop gedrukt!');
  }
}
