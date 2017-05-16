import { Command } from './commands/command';
import { Injectable } from '@angular/core';
import { CommandFactory } from './commands/command-factory';
import { Subject } from 'rxjs/Subject';
import { CreateListCommand } from './commands/create-list-command';

// @todo temp
@Injectable()
export class Bus {
  private stream: Subject<Command>;

  constructor(private commandFactory: CommandFactory) {
    this.stream = new Subject();

    console.log('throw');
    this.stream.next(new CreateListCommand('heja'));
  }

  public handle(command: Command) {
    this.persist(command);
    this.emit(command);
  }

  private persist(command: Command) {
    let list = this.readList();
    list.push(command);
    this.writeList(list);

    console.log(
      list
    );
  }

  private emit(command: Command): void {
    this.stream.next(command);
  }

  // @todo only subscribe
  public getSubscriber(): Subject<Command> {
    return this.stream;
  }

  private readList(): Array<Command> {
    let list = localStorage.getItem('commands');

    if (!list) {
      return [];
    }

    return JSON.parse(list).map((serialized) => {
      return this.commandFactory.fromString(serialized.query, serialized.payload);
    });
  }

  private writeList(list: Array<Command>): void {
    let serializedList = list.map((command: Command) => {
      return this.commandSerialize(command);
    });

    localStorage.setItem('commands', JSON.stringify(serializedList));
  }

  private commandSerialize(command: Command): Object {
    return {
      query: command.getQuery(),
      payload: command
    };
  }
}
