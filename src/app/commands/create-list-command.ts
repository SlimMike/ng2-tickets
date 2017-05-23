import { Command } from './command';

export class CreateListCommand extends Command {
  public localId: String;
  public name: String;

  public static generateId(): string {
    return 'list_' + Math.floor(Math.random() * 1000000);
  }

  constructor(localId: String, name: String) {
    super();
    this.localId = localId;
    this.name    = name;
  }

  public getQuery(): string {
    return 'list:create';
  }
}
