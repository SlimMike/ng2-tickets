import { Component, OnInit } from '@angular/core';
import { Board } from '../board';
import { List } from '../list';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  private board: Board;

  constructor() {
    this.board = new Board('FancyBoard');

    let list1 = new List('TODO');
    let list2 = new List('In Progress');
    this.board.addList(list1);
    this.board.addList(list2);
  }

  ngOnInit() {
  }
}
