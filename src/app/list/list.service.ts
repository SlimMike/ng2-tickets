import { Injectable } from '@angular/core';
import { List } from '../list';
import { Bus } from '../bus';
import { Command } from '../commands/command';
import { CreateListCommand } from '../commands/create-list-command';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ListService {
  private stream: BehaviorSubject<Array<List>>;
  private lastApplied = 0;
  private lists: Array<List>;

  constructor(private bus: Bus) {
    console.log('construct');
    this.lists  = [];
    this.stream = new BehaviorSubject<Array<List>>([]);

    bus.getSubscriber().subscribe((commands: Array<Command>) => {
      // @todo don't send this
      commands
        .slice(this.lastApplied)
        .forEach(this.onNewCommand, this);
      this.lastApplied = commands.length;
    });
  }

  onNewCommand(command: Command) {
    if (command instanceof CreateListCommand) {
      this.lists.push(new List(command.name));
      this.stream.next(this.lists);
    } else {
      console.log(command);
    }
  }

  // @todo only subscribe
  getStream() {
    return this.stream;
  }
}
