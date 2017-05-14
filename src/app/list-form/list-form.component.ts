import { Component, OnInit } from '@angular/core';
import { List } from '../list';
import { Bus } from '../bus';
import { CreateListCommand } from '../commands/create-list-command';

@Component({
  selector: 'app-list-form',
  templateUrl: './list-form.component.html',
  styleUrls: ['./list-form.component.scss']
})
export class ListFormComponent implements OnInit {
  public model   = new List('');
  public editing = false;
  private bus: Bus;

  constructor(bus: Bus) {
    this.bus = bus;
  }

  ngOnInit() {
  }

  onSubmit() {
    // @todo should i use `List` model here?
    this.bus.handle(new CreateListCommand(this.model.name));

    this.model = new List('');
  }
}
