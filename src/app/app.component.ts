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

  player = this.game.currentPlayer;
  winner: string;

  title = 'Tic Tac Toe';
  isOver = false;

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
        this.displayedBoard[position - 1] = this.game.currentPlayer;
        this.game.makeMove2(position);
        this.winningMove();
      }
    }
  }
}
