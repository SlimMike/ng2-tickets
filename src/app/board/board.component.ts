import { Component, OnInit } from '@angular/core';
import { Board } from '../board';
import { List } from '../list';
import { ListService } from '../list/list.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  public board: Board;
  public lists: List[];

  constructor(private listService: ListService) {
    this.board = new Board('FancyBoard');
    this.lists = [];

    console.log('listening...');

    let subscription = listService.getStream().subscribe(
      (value) => {
        this.lists.push(value);
      }
    );
  }

  ngOnInit() {
  }
}
