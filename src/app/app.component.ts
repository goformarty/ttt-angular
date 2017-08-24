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
  title = 'Tic Tac Toe';

  board = new BoardComponent();
  game = new GameComponent(this.board);

  boardLength = this.board.size;
  boardLineLength = Math.round(Math.sqrt(this.boardLength));
  boardLineArray = Array.from(Array(this.boardLineLength).keys());


  currentPlayer = this.game.currentPlayer;
  winner: string;


  isOver = false;
  oMark: boolean;

  displayedBoard = new Array(9).fill(null);

  status = 'Player: X';

  makeMove(position: number) {
    if (this.game.isStillRunning()) {
      console.log(position);
      this.game.makeMove(position);
      this.updateDisplayedStatus();
    }
  }

  updateDisplayedStatus() {
    if (this.game.isWon()) {
      this.status = 'Winner: ' + this.game.currentPlayer; 
    } else {
      this.status = 'Player: ' + this.game.currentPlayer;
    }
  }


 

  newGame() {
    this.isOver = false;
    this.board = new BoardComponent;
    this.displayedBoard = new Array(9).fill(null);
    this.game = new GameComponent(this.board);
    this.currentPlayer = this.game.currentPlayer;
  }
}
