import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-new-field',
  templateUrl: './new-field.component.html',
  styleUrls: ['./new-field.component.scss']
})
export class NewFieldComponent implements OnInit {

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
