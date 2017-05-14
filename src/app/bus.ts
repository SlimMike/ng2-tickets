import { Command } from './commands/command';

export class Bus {
  public handle(command: Command) {
    console.log(command);
  }
}
