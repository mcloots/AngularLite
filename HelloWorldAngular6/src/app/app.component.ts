import { Component, OnInit } from '@angular/core';
import { LoggerService } from './services/logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoggerService]
})
export class AppComponent implements OnInit {
  title = 'HelloWorldAngular6';

  constructor(private _loggerService : LoggerService){}

  ngOnInit() {
    this._loggerService.logError("Test!!");
  }
}
