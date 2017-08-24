import { BoardComponent } from './board/board.component';
import { GameComponent } from './game/game.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GameComponent]
})
export class AppComponent {

  board = new BoardComponent();
  game = new GameComponent(this.board);

  boardLength = this.board.size;
  boardLineLength = Math.round(Math.sqrt(this.boardLength));
  boardLineArray = Array.from(Array(this.boardLineLength).keys());

  isPlayerOActive = true;

  player = this.game.currentPlayer;
  winner: string;

  title = 'Tic Tac Toe';
  isOver = false;
  oMark: boolean;

  displayedBoard = new Array(9).fill(null);

  get status() {
    return this.isOver ? 'Winner: ' + this.winner :
      'Player ' + this.player + ' turn';
  }

  winningMove() {
    console.log('check for winning move ' + this.game.isWon());
    if (this.game.isWon()) {
      this.isOver = true;
      this.winner = this.game.currentPlayer === 'X' ? 'O' : 'X';
      return true;
    }
    if (this.game.isDraw()) {
      this.isOver = true;
      this.winner = 'no one, it is a draw!';
    }
  }

  updateBoard(position: number) {
    console.log(this.isOver);
    if (!this.isOver) {
      if (this.displayedBoard[position - 1] === null) {
        this.player = this.game.currentPlayer === 'X' ? 'O' : 'X';
        // this.player === 'X' ? (this.xMark = true) : (this.xMark = false);
        this.displayedBoard[position - 1] = this.game.currentPlayer;
        this.game.makeMove2(position);
        this.winningMove();
      }
    }
  }

  newGame() {
    this.isOver = false;
    this.board = new BoardComponent;
    this.displayedBoard = new Array(9).fill(null);
    this.game = new GameComponent(this.board);
    this.player = this.game.currentPlayer;
  }
}
