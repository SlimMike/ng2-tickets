import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';

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
  @Input()
  public blurAfterNotify: boolean;
  public editing: boolean;
  // @todo type
  private inputRef: any;

  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  private _displayed;
  public get displayed() {
    return this._displayed;
  }

  public set displayed(value: string) {
    this._displayed = value;
    this.current    = value;
  }

  constructor(private elementRef: ElementRef) {
  }

  ngOnInit() {
    this.inputRef = this.elementRef.nativeElement.children[0].children[0];
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
    } else {
      this.placeholder = this.current;
    }
    // @todo blur without ViewChild?
    if (this.blurAfterNotify) {
      this.inputRef.blur();
    }
  }
}
