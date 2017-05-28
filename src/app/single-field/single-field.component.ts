import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { RandomIdGenerator } from '../random-id-generator';

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

  constructor(private randomIdGenerator: RandomIdGenerator) {
    this.randomId = randomIdGenerator.generateRandomId();
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
}
