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

  clickedPosition: number;

  updateBoard(position: number) {
    console.log(position);
  }


}
