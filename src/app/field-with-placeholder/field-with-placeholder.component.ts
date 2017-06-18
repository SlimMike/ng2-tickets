import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-field-with-placeholder',
  templateUrl: './field-with-placeholder.component.html',
  styleUrls: ['./field-with-placeholder.component.scss']
})
export class FieldWithPlaceholderComponent implements OnInit {

  @Input()
  public placeholder: string;
  @Input()
  public initial: string;
  @Input()
  public current: string;
  public editing: boolean;

  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  private _displayed;
  public get displayed() {
    return this._displayed;
  }

  public set displayed(value: string) {
    this._displayed = value;
    this.current    = value;
    this.notify.emit(value);
  }

  ngOnInit() {
    this.editing = false;
    this.current = this.initial;
    this.blur();
  }

  focus() {
    this.editing    = true;
    this._displayed = this.current;
  }

  blur() {
    this.editing    = false;
    this._displayed = this.placeholder;
  }
}
