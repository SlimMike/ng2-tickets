import { Component, OnInit } from '@angular/core';
import { SingleFieldComponent } from '../single-field/single-field.component';

@Component({
  selector: 'app-editable-field',
  templateUrl: '../single-field/single-field.component.html',
  styleUrls: ['./editable-field.component.scss']
})
export class EditableFieldComponent extends SingleFieldComponent implements OnInit {
  resetCurrent() {
    this.current = this.initial;
  }
}
