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

  printBoard() {
    this.board.printBoard();
  }
  makeMove(position: number) {
    if (this.board.isValid(position)) {
      this.board.placeMark(this.currentPlayer, position);
      this.changePlayer();
    }
  }

  isDraw() {
    console.log('remaining moves: ' + this.board.remainingMoves());
    if ((!this.isWon()) && (this.board.remainingMoves() === 0) ) {
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
