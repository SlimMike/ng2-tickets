import { Command } from './commands/command';
import { Injectable } from '@angular/core';
import { CommandFactory } from './commands/command-factory';

// @todo temp
@Injectable()
export class Bus {
  constructor(private commandFactory: CommandFactory) {
  }

  public handle(command: Command) {
    console.log(command);
    this.persist(command);
  }

  private persist(command: Command) {
    let list = this.readList();
    list.push(command);
    this.writeList(list);

    console.log(
      list
    );
  }

  private readList() {
    let list = localStorage.getItem('commands');

    if (!list) {
      return [];
    }

    return JSON.parse(list).map((serialized) => {
      return this.commandFactory.fromString(serialized.query, serialized.payload)
    });
  }

  private writeList(list: Array<Command>) {
    let serializedList = list.map((command: Command) => {
      return this.commandSerialize(command);
    });

    localStorage.setItem('commands', JSON.stringify(serializedList));
  }

  private commandSerialize(command: Command) {
    return {
      query: command.getQuery(),
      payload: command
    };
  }
}
