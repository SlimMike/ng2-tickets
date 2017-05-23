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
  public model   = new List('');
  public editing = false;
  public id      = Math.floor(Math.random() * 1000000);

  ngOnInit() {
    this.model.name = this.list.name;
  }

  focus() {
    this.editing = true;
  }

  blur() {
    this.editing = false;
  }

  onSubmit() {
    // @todo should i use `List` model here?
    // this.bus.handle(new CreateListCommand(this.model.name));

    // this.model = new List('');
  }
}
