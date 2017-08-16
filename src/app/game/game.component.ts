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
      this.changePlayer();
    }
  }

  isDraw() {
    if ((!this.isWon()) && (this.board.isBoardFull())) {
      return true;
    } else {
      return false;
    }
  }

  checkingStuff(): any {
    console.log(this.board.returnMark(1));
  }

  isWon(): boolean {
    if (this.checkRows() || this.checkColumns()) {
      return true;
    }
    return false;
  }

  private changePlayer() {
    this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
  }

  private checkRows() {
    for (let i = 1; i <= 7; i = i + 3) {
      // tslint:disable-next-line:max-line-length
      if (this.board.returnMark(i) !== undefined && this.board.returnMark(i) === this.board.returnMark(i + 1) && this.board.returnMark(i) === this.board.returnMark(i + 2)) {
        return true;
      }
    }
  }

    private checkColumns() {
    for (let i = 1; i <= 3; i++) {
      // tslint:disable-next-line:max-line-length
      if (this.board.returnMark(i) !== undefined && this.board.returnMark(i) === this.board.returnMark(i + 3) && this.board.returnMark(i + 3) === this.board.returnMark(i + 6)) {
        return true;
      }
    }
  }

}
