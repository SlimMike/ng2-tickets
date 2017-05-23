import { Component, Input, OnInit } from '@angular/core';
import { List } from '../list';

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

    // this.bus.handle(new CreateListCommand(this.model.name));

    this.model.name = this.list.name.toString();
    this.blur();
  }
}
