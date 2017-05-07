import { Component, OnInit } from '@angular/core';
import { Board } from '../board';
import { List } from '../list';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  private board: Board;

  constructor() {
    this.board = new Board('FancyBoard');

    let list = new List('TODO');
    this.board.addList(list);
  }

  ngOnInit() {
  }
}
