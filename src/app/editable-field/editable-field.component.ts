import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-editable-field',
  templateUrl: './editable-field.component.html',
  styleUrls: ['./editable-field.component.scss']
})
export class EditableFieldComponent implements OnInit {

  @Input()
  public field: string;
  @Input()
  public initial: string;
  public current: string;
  public randomId: string;
  public editing = false;
  public id: string;

  @Output()
  public result: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    this.randomId = this.generateRandomId();
    this.id       = '';
    this.current  = '';
  }

  ngOnInit() {
    this.current = this.initial;
    this.id      = 'list' + this.field + this.randomId;
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

    this.result.emit(this.current);

    this.current = this.initial;
    this.blur();
  }

  // @todo extract
  generateRandomId(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
}
