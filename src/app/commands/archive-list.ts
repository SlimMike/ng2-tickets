import { Command } from './command';

export class ArchiveList extends Command {
  public localId: String;

  constructor(localId: String) {
    super();
    this.localId = localId;
  }

  public getQuery(): string {
    return 'list:archive';
  }
}
