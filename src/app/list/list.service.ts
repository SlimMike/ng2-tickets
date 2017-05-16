import { Injectable } from '@angular/core';
import { List } from '../list';
import { Bus } from '../bus';
import { Subject } from 'rxjs/Subject';
import { Command } from '../commands/command';
import { CreateListCommand } from '../commands/create-list-command';

@Injectable()
export class ListService {
  private stream: Subject<List>;

  constructor(private bus: Bus) {
    console.log('construct');

    this.stream = new Subject();

    bus.getSubscriber().subscribe((command: Command) => {
      console.log('in service');
      console.log(command);

      if (command instanceof CreateListCommand) {
        this.stream.next(new List(command.name));
      }
    });
  }

  // @todo only subscribe
  getStream() {
    return this.stream;
  }
}
