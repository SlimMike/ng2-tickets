import { Injectable } from '@angular/core';
import { List } from '../list';
import { Bus } from '../bus';
import { Subject } from 'rxjs/Subject';
import { Command } from '../commands/command';
import { CreateListCommand } from '../commands/create-list-command';

@Injectable()
export class ListService {
  private stream: Subject<List>;
  private lastApplied = 0;

  constructor(private bus: Bus) {
    console.log('construct');

    this.stream = new Subject();

    bus.getSubscriber().subscribe((commands: Array<Command>) => {
      commands.slice(this.lastApplied).forEach(this.onNewCommand);
      this.lastApplied = commands.length;
    });
  }

  onNewCommand(command: Command) {
    if (command instanceof CreateListCommand) {
      console.log('add list plz');
      // this.stream.next(new List(command.name));
    } else {
      console.log(command);
    }
  }

  // @todo only subscribe
  getStream() {
    return this.stream;
  }
}
