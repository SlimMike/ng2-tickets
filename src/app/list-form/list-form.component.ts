import { Component } from '@angular/core';
import { Bus } from '../bus';
import { CreateListCommand } from '../commands/create-list-command';

@Component({
  selector: 'app-list-form',
  templateUrl: './list-form.component.html',
  styleUrls: ['./list-form.component.scss']
})
export class ListFormComponent {
  public name = '';

  constructor(private bus: Bus) {
  }

  onListNameChange(name: string) {
    this.name = name;
  }

  onSubmit() {
    this.bus.handle(new CreateListCommand(CreateListCommand.generateId(), this.name));

    this.name = '';
  }
}
