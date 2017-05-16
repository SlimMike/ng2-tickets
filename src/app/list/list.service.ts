import { Injectable } from '@angular/core';
import { List } from '../list';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ListService {
  private stream: Observable<List>;

  constructor() {
    console.log('ding');

    this.stream = new Observable(observer => {
      setTimeout(() => {
        observer.next(new List('TODO'));
      }, 1000);

      setTimeout(() => {
        observer.next(new List('In Progress'));
      }, 2000);

      setTimeout(() => {
        observer.complete();
      }, 3000);
    });
  }

  getStream() {
    return this.stream;
  }
}
