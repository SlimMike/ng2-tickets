import { Command } from './command';

export class CreateListCommand extends Command {
  public name: String;

  constructor(name: String) {
    super();
    this.name = name;
  }

  public getQuery(): string {
    return 'list:create';
  }
}
