import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

// @todo extend
@Component({
  selector: 'app-single-field',
  templateUrl: './single-field.component.html',
  styleUrls: ['./single-field.component.css']
})
export class SingleFieldComponent implements OnInit {

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
    this.id = 'list' + this.field + this.randomId;
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

    this.current = '';
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
