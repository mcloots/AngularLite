import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, filter, catchError } from 'rxjs/operators';


@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit, OnDestroy {
  counter: number;
  counterMap: number;

  obs$ = new Observable<number>(observer => {
    setInterval(() => {
      const rnd = Math.floor(Math.random() * 100);
      observer.next(rnd);
    }, 1000);

    setTimeout(() => {
      observer.complete();
      console.log('Observer stops on complete');
    }, 15001);
  });

  subscription = this.obs$.subscribe(data => {
    this.counter = data;
  });

  subscriptionMap = this.obs$
    .pipe(
      map((c: number) => c * 100)
    )
    .subscribe(data => {
      this.counterMap = data;
    });

  getallen$ = of(1, 2, 3, 4, 5)
    .pipe(
      filter(n => n % 2 !== 0)
    ).subscribe(x => console.log(x));

  errorHandling$ = of(1,2,3,4,5)
    .pipe(
      map(test => {
        if(test === 5) { throw new Error('5 geeft een fout!');}
        return test;
      })
    ).subscribe(
      result => console.log(result),
      err => console.log('Error: ' + err)
    );
  constructor() {

  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
