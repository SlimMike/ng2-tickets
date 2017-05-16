import { Command } from './commands/command';
import { Injectable } from '@angular/core';
import { CommandFactory } from './commands/command-factory';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

// @todo temp
@Injectable()
export class Bus {
  private stream: Subject<Array<Command>>;

  constructor(private commandFactory: CommandFactory) {
    this.stream = new BehaviorSubject(this.readList());
  }

  public handle(command: Command): void {
    this.persist(command);
    this.emit();
  }

  private persist(command: Command): void {
    let list = this.readList();
    list.push(command);
    this.writeList(list);
  }

  // @todo should emit only one instead of all
  private emit(): void {
    this.stream.next(this.readList());
  }

  // @todo only subscribe
  public getSubscriber(): Subject<Array<Command>> {
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
