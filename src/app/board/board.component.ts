import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {
  private size = 9;
  private grid: Array<any> = new Array<any>(this.size);

  constructor() { }

  isBoardEmpty(): boolean {
    return (this.remainingMoves() === 0) ? true : false;
  }

  placeMark(mark: string, position: number) {
    if (this.isValid(position)) {
      this.grid[position] = mark;
    }
  }

  returnMark(position: number) {
    return this.grid[position];
  }

  private remainingMoves() {
    let remaining = 0;
    // tslint:disable-next-line:prefer-const
    for (let i in this.grid) {
      if (this.grid[i] === undefined) {
        remaining++;
      }
    }
    return remaining;
  }

  private isValid(position: number): boolean {
    return (this.isValidRange(position) && this.isPositionEmpty(position));
  }

  private isValidRange(position: number): boolean {
    return (position >= 0 && position <= 8);
  }

  private isPositionEmpty(position: number): boolean {
    return (this.grid[position] === undefined);
  }
}


