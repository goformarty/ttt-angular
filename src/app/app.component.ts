import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tic Tac Toe';
  public xTurn: true;
  playerMarker: string;
  playerClass: boolean;

  clicked() {
    this.playerMarker = 'X';
    this.playerClass = true;
  }
}
