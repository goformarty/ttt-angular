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

  boardDimension = Math.round(Math.sqrt(this.board.size));
  rows = Array.from(Array(this.boardDimension).keys());
  columns = Array.from(Array(this.boardDimension).keys());

  status = 'Turn: Player ' + this.game.currentPlayer;
  boardDisabled = false;

  makeMove(position: number) {
    if (this.game.isStillRunning()) {
      console.log(position);
      this.game.makeMove(position);
      this.updateDisplayedStatus();
    }
  }

  updateDisplayedStatus() {
    if (this.game.isWon()) {
      this.status = 'Winner: Player ' + this.game.currentPlayer;
      this.boardDisabled = true;
      alert(this.status);
    } else if (this.game.isDraw()) {
      this.status = 'It is a draw!';
      this.boardDisabled = true;
    } else {
      this.status = 'Turn: Player ' + this.game.currentPlayer;
    }
  }

  newGame() {
    this.board = new BoardComponent;
    this.game = new GameComponent(this.board);
    this.status = 'Turn: Player ' + this.game.currentPlayer;
  }
}
