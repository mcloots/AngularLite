import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit, OnDestroy {
  counter:number;

  obs$ = new Observable<number>(observer => {
    setInterval(() => {
      const rnd = Math.floor(Math.random() * 100);
      observer.next(rnd);
    }, 1000);

    setTimeout( () => {
      observer.complete();
      console.log('Observer stops on complete');
    }, 15001);
  });

  subscription = this.obs$.subscribe(data => {
    this.counter = data;
  });
  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
