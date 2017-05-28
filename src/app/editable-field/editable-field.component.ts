import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-editable-field',
  templateUrl: './editable-field.component.html',
  styleUrls: ['./editable-field.component.scss']
})
export class EditableFieldComponent implements OnInit {

  @Input()
  public localId: string;
  @Input()
  public field: string;
  @Input()
  public initial: string;
  public current: string;
  public editing = false;
  public id: string;

  @Output()
  public change: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    this.id = '';
    this.current = '';
  }

  ngOnInit() {
    this.current = this.initial;
    this.id = 'list' + this.field + this.localId;
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

    this.change.emit(this.current);

    this.current = this.initial;
    this.blur();
  }
}
