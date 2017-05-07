import { Component, OnInit } from '@angular/core';
import { Board } from '../board';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  private board: Board;

  constructor() {
    this.board = new Board('FancyBoard');
  }

  ngOnInit() {
  }
}
