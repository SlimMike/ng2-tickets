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
  @Input()
  public clearAfterNotify: boolean;
  public editing: boolean;

  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  private _displayed;
  public get displayed() {
    return this._displayed;
  }

  public set displayed(value: string) {
    this._displayed = value;
    this.current    = value;
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

  onSubmit() {
    this.notify.emit(this.current);
    // @todo force filling this attribute?
    if (this.clearAfterNotify) {
      this.displayed = '';
    }
  }
}
