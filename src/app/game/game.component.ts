import { BoardComponent } from './../board/board.component';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
  providers: [BoardComponent]
})
export class GameComponent {
  board: BoardComponent;

  constructor(board: BoardComponent) {
    this.board = board;
  }

  players = ['X', 'O'];
  currentPlayer = this.players[0];

  // board positions
  // [1] [2] [3]
  // [4] [5] [6]
  // [7] [8] [9]

  private rows = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
  private columns = [[1, 4, 7], [2, 5, 7], [3, 6, 9]];

  makeMove(position: number) {
    if (this.board.isValid(position)) {
      this.board.placeMark(this.currentPlayer, position);
      this.toggleCurrentPlayer(this.board);
    }
  }

  isDraw() {
    if ((!this.isWon()) && (this.board.isBoardFull())) {
      return true;
    } else {
      return false;
    }
  }

  isWon(): boolean {
    if (this.checkRows() || this.checkColumns() || this.checkDiagonals()) {
      return true;
    }
    return false;
  }

  private toggleCurrentPlayer(board: BoardComponent) {

    (this.board.remainingMoves() % 2 !== 0) ?
      this.currentPlayer = this.players[0] :
      this.currentPlayer = this.players[1];
  }

  private isAnyUndefined(row: Array<any>): number {
    return row.filter(x => typeof x === 'undefined').length;
  }

  private checkRows() {
    for (let i = 0; i < this.rows.length; i++) {
      if (this.isRowTheSame(this.rows[i])) {
        return true;
      }
    }
  }

  private isRowTheSame(row: Array<number>) {
    // if (this.isAnyUndefined(row) > 0) {
      const mark1 = this.board.returnMark(row[0]);
      const mark2 = this.board.returnMark(row[1]);
      const mark3 = this.board.returnMark(row[2]);

      console.log(mark1 + ' ' + mark2 + ' ' + mark3);
      if ((mark1 === mark2) &&
        (mark2 === mark3)) {
          console.log('meow wow');
        return true;
      }
   // }
  }

  private checkColumns() {
    for (let i = 1; i <= 3; i++) {
      if (this.board.returnMark(i) !== undefined &&
        this.board.returnMark(i) === this.board.returnMark(i + 3) &&
        this.board.returnMark(i + 3) === this.board.returnMark(i + 6)) {
        return true;
      }
    }
  }

  private checkDiagonals() {
    for (let i = 1, j = 4; i <= 3; i = i + 2, j = j - 2) {
      if (this.board.returnMark(i) !== undefined &&
        this.board.returnMark(i) === this.board.returnMark(i + j) &&
        this.board.returnMark(i + j) === this.board.returnMark(i + 2 * j)) {
        return true;
      }
    }
  }

}
