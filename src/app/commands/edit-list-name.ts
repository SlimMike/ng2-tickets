import { Command } from './command';

export class EditListName extends Command {
  public localId: String;
  public name: String;

  constructor(localId: String, name: String) {
    super();
    this.localId = localId;
    this.name    = name;
  }

  public getQuery(): string {
    return 'list:edit-name';
  }
}
