import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

// @todo extend
@Component({
  templateUrl: './single-field.component.html',
  styleUrls: ['./single-field.component.css']
})
export abstract class SingleFieldComponent implements OnInit, OnChanges {

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
  }

  ngOnInit() {
    this.id = 'list' + this.field + this.randomId;
    this.resetCurrent();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.initial) {
      this.initial = changes.initial.currentValue;
      this.resetCurrent();
    }
  }

  abstract resetCurrent();

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

    this.resetCurrent();
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
