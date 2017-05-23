import { CreateListCommand } from './create-list-command';
import { EditListName } from './edit-list-name';

// @todo temp
export class CommandFactory {
  public fromString(name: string, args) {
    if ('list:create' === name) {
      return new CreateListCommand(args.localId, args.name);
    }

    if ('list:edit-name' === name) {
      return new EditListName(args.localId, args.name);
    }

    throw new Error('fail');
  }
}
