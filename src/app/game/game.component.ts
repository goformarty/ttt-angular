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
    if ((!this.isWon()) && (this.board.isBoardFull()) ) {
      return true;
    } else {
      return false;
    }
  }

  isWon() {
    return false;
  }

  private changePlayer() {
    this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
  }

}
