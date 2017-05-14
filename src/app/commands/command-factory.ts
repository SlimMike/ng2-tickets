import { CreateListCommand } from './create-list-command';

// @todo temp
export class CommandFactory {
  public fromString(name: string, args) {
    if ('list:create' === name) {
      return new CreateListCommand(args.name);
    }

    throw new Error('fail');
  }
}
