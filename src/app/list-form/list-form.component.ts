import { Component, OnInit } from '@angular/core';
import { List } from '../list';

@Component({
  selector: 'app-list-form',
  templateUrl: './list-form.component.html',
  styleUrls: ['./list-form.component.scss']
})
export class ListFormComponent implements OnInit {
  public model  = new List('');
  public editing = false;

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.model);
  }
}
