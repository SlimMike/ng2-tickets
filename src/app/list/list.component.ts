import { Component, Input, OnInit } from '@angular/core';
import { List } from '../list';
import { Bus } from '../bus';
import { ArchiveList } from '../commands/archive-list';
import { EditListName } from '../commands/edit-list-name';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input()
  public list: List;

  constructor(private bus: Bus) {
  }

  ngOnInit() {
  }

  onEditListName(name: string) {
    this.bus.handle(new EditListName(this.list.localId, name));
  }

  archive() {
    this.bus.handle(new ArchiveList(this.list.localId));
  }

  addTicket() {
    console.log('add ticket');
  }
}
