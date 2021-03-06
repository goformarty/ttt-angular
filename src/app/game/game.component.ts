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

  makeMove(position: number) {
    if (this.board.isValid(position)) {
      this.board.placeMark(this.currentPlayer, position);
      this.toggleCurrentPlayer(this.board);
    }
  }

  isOver(): boolean {
    return (this.isWon() || this.isDraw());
  }

  isStillRunning(): boolean {
    return !this.isOver();
  }

  isDraw(): boolean {
    return ((!this.isWon()) && (this.board.isBoardFull()));
  }

  isWon(): boolean {
    return (this.checkRows() || this.checkColumns() || this.checkDiagonals());
  }

  private toggleCurrentPlayer(board: BoardComponent) {
    if (this.isStillRunning()) {
      (this.board.remainingMoves() % 2 === 0) ?
        this.currentPlayer = this.players[1] :
        this.currentPlayer = this.players[0];
    }
  }

  private checkRows(): boolean {
    for (let i = 1; i <= 7; i = i + 3) {
      if (this.board.returnMark(i) !== undefined &&
        this.board.returnMark(i) === this.board.returnMark(i + 1) &&
        this.board.returnMark(i + 1) === this.board.returnMark(i + 2)) {
        return true;
      }
    }
    return false;
  }

  private checkColumns(): boolean {
    for (let i = 1; i <= 3; i++) {
      if (this.board.returnMark(i) !== undefined &&
        this.board.returnMark(i) === this.board.returnMark(i + 3) &&
        this.board.returnMark(i + 3) === this.board.returnMark(i + 6)) {
        return true;
      }
    }
    return false;
  }

  private checkDiagonals(): boolean {
    for (let i = 1, j = 4; i <= 3; i = i + 2, j = j - 2) {
      if (this.board.returnMark(i) !== undefined &&
        this.board.returnMark(i) === this.board.returnMark(i + j) &&
        this.board.returnMark(i + j) === this.board.returnMark(i + 2 * j)) {
        return true;
      }
    }
    return false;
  }
}
