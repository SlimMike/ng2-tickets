import { List } from './list';

export class Board {
  public name: String;
  public lists: List[];

  constructor(name: String) {
    this.name  = name;
    this.lists = [];
  }

  public addList(list: List) {
    this.lists.push(list);
  }
}
