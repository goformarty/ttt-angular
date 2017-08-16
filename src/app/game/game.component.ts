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


  currentPlayer = 'X';

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
    // this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';

    (this.board.remainingMoves() % 2 !== 0) ?
    this.currentPlayer = 'X' :
    this.currentPlayer = 'O';

  }


  private checkRows() {
  for (let position = 1; position <= 7; position = position + 3) {
    if (this.board.returnMark(position) !== undefined &&
      this.board.returnMark(position) === this.board.returnMark(position + 1) &&
      this.board.returnMark(position) === this.board.returnMark(position + 2)) {
      return true;
    }
  }
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
