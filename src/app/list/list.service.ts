import { Injectable } from '@angular/core';
import { List } from '../list';
import { Bus } from '../bus';
import { Command } from '../commands/command';
import { CreateListCommand } from '../commands/create-list-command';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { EditListName } from '../commands/edit-list-name';
import { ArchiveList } from '../commands/archive-list';

@Injectable()
export class ListService {
  private stream: BehaviorSubject<Array<List>>;
  private lastApplied = 0;
  private lists: Array<List>;

  constructor(private bus: Bus) {
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
      this.lists.push(new List(command.localId, command.name));
      this.stream.next(this.lists);

      return;
    }

    if (command instanceof EditListName) {
      this.lists.find(function(element) {
        return element.localId === command.localId;
      }).name = command.name;

      this.stream.next(this.lists);

      return;
    }

    // @todo set flag instead of removing?
    if (command instanceof ArchiveList) {
      let index = this.lists.findIndex(function(element) {
        return element.localId === command.localId;
      });

      this.lists.splice(index, 1);

      this.stream.next(this.lists);

      return;
    }

    console.log(command);
  }



  // @todo only subscribe
  getStream() {
    return this.stream;
  }
}
