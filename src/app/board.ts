import { List } from './list';

export class Board {
  public name: String;
  public lists: List[];

  constructor(name: String) {
    this.name  = name;
    this.lists = [];
  }
}
