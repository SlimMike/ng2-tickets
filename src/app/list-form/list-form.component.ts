import { Component, OnInit } from '@angular/core';
import { Bus } from '../bus';
import { CreateListCommand } from '../commands/create-list-command';

@Component({
  selector: 'app-list-form',
  templateUrl: './list-form.component.html',
  styleUrls: ['./list-form.component.scss']
})
export class ListFormComponent implements OnInit {
  public model   = {name: ''};
  public editing = false;

  constructor(private bus: Bus) {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.bus.handle(new CreateListCommand(CreateListCommand.generateId(), this.model.name));

    this.model = {name: ''};
  }
}
