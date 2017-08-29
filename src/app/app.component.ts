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
  statusFinished = false;

  boardClicked(position: number): void {
    if (this.game.isStillRunning()) {
      this.game.makeMove(position);
      this.updateDisplayedStatus();
    }
  }

  updateDisplayedStatus(): void {
    if (this.game.isWon()) {
      this.updateStatusWon();
    } else if (this.game.isDraw()) {
      this.updateStatusDraw();
    } else {
      this.updateStatusTurn();
    }
  }

  newGame(): void {
    this.restartGameBoard();
    this.restartStatus();
  }

  private restartGameBoard(): void {
    this.clearBoard();
    this.clearGame();
  }

  private restartStatus(): void {
    this.statusFinished = false;
    this.status = 'Turn: Player ' + this.game.currentPlayer;
  }

  private clearBoard(): BoardComponent {
    return this.board = new BoardComponent;
  }

  private clearGame(): GameComponent {
    return this.game = new GameComponent(this.board);
  }

  private updateStatusWon(): void {
    this.status = 'Winner: Player ' + this.game.currentPlayer;
    this.statusGameIsOver();
  }

  private updateStatusDraw(): void {
    this.status = 'It is a draw!';
    this.statusGameIsOver();
  }

  private updateStatusTurn(): void {
    this.status = 'Turn: Player ' + this.game.currentPlayer;
  }

  private statusGameIsOver(): void {
    this.statusFinished = true;
    alert(this.status);
  }
}
