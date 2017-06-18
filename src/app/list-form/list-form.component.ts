import { Component } from '@angular/core';
import { Bus } from '../bus';
import { CreateListCommand } from '../commands/create-list-command';

@Component({
  selector: 'app-list-form',
  templateUrl: './list-form.component.html',
  styleUrls: ['./list-form.component.scss']
})
export class ListFormComponent {

  constructor(private bus: Bus) {
  }

  onSubmit(name: string) {
    this.bus.handle(new CreateListCommand(CreateListCommand.generateId(), name));
  }
}
