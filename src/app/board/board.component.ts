import { Component, OnInit } from '@angular/core';
import { SpecHelper } from '../spec-helper/spec.helper';

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
      this.grid[position - 1] = mark;
    }
  }

  returnMark(position: number) {
    return this.grid[position - 1];
  }

  private remainingMoves() {
    const remaining = this.grid.filter(
      function (value) {
        return value === undefined;
      });
    return remaining.length;
  }

  private isValid(position: number): boolean {
    return (this.isValidRange(position) && this.isPositionEmpty(position));
  }

  private isValidRange(position: number): boolean {
    return (position >= 1 && position <= 9);
  }

  private isPositionEmpty(position: number): boolean {
    return (this.grid[position] === undefined);
  }
}
