import { CreateListCommand } from './create-list-command';
import { EditListName } from './edit-list-name';
import { ArchiveList } from './archive-list';

// @todo temp
export class CommandFactory {
  public fromString(name: string, args) {
    if ('list:create' === name) {
      return new CreateListCommand(args.localId, args.name);
    }

    if ('list:edit-name' === name) {
      return new EditListName(args.localId, args.name);
    }

    if ('list:archive' === name) {
      return new ArchiveList(args.localId);
    }

    throw new Error('fail');
  }
}
