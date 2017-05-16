import { Component, OnInit } from '@angular/core';
import { Board } from '../board';
import { List } from '../list';
import { ListService } from '../list/list.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  private board: Board;
  public lists: List[];

  constructor(private listService: ListService) {
    this.board = new Board('FancyBoard');
    this.lists = [];

    let subscription = listService.getStream().subscribe(
      (value) => {
        this.lists.push(value);
      }
      , (error) => {
        console.log('error');
      },
      () => {
        console.log('finished');
      }
    );
  }

  ngOnInit() {
  }
}
