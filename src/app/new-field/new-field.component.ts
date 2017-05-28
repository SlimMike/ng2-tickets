import { Component } from '@angular/core';
import { SingleFieldComponent } from '../single-field/single-field.component';

// @todo extend
@Component({
  selector: 'app-new-field',
  templateUrl: '../single-field/single-field.component.html',
  styleUrls: ['./new-field.component.scss']
})
export class NewFieldComponent extends SingleFieldComponent {
  resetCurrent() {
    this.current = '';
  }
}
