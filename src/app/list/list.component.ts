import { Component, Input, OnInit } from '@angular/core';
import { List } from '../list';
import { Bus } from '../bus';
import { EditListName } from '../commands/edit-list-name';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input()
  public list: List;
  public model   = {name: ''};
  public editing = false;

  constructor(private bus: Bus) {
  }

  ngOnInit() {
    this.model.name = this.list.name.toString();
  }

  focus() {
    this.editing = true;
  }

  blur() {
    this.editing = false;
  }

  onSubmit() {
    if (!this.editing) {
      return;
    }

    this.bus.handle(new EditListName(this.list.localId, this.model.name));

    this.model.name = this.list.name.toString();
    this.blur();
  }
}
