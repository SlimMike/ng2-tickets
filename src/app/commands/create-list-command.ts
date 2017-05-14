import { Command } from './command';

export class CreateListCommand extends Command{
  public name: String;

  constructor(name: String) {
    super();
    this.name = name;
  }
}
