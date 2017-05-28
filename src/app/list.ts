export class List {
  public localId: String;
  public name: String;
  public isArchived: boolean;

  constructor(localId: String, name: String) {
    this.localId     = localId;
    this.name        = name;
    this.isArchived = false;
  }
}
