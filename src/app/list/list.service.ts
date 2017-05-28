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

  onNewCommand(command: Command): void {
    if (command instanceof CreateListCommand) {
      this.lists.push(new List(command.localId, command.name));
      this.stream.next(this.lists);

      return;
    }

    if (command instanceof EditListName) {
      const element = this.findById(command.localId);

      element.name = command.name;

      this.stream.next(this.lists);

      return;
    }

    if (command instanceof ArchiveList) {
      const element = this.findById(command.localId);

      element.isArchived = true;

      this.stream.next(this.lists);

      return;
    }

    console.log(command);
  }

  private findById(localId: String): List | undefined {
    return this.lists.find(function(element) {
      return element.localId === localId;
    });
  }

  // @todo only subscribe
  getStream() {
    return this.stream;
  }
}
