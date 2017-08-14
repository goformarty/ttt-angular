import { Component, OnInit } from '@angular/core';
import { SpecHelper } from '../spec-helper/spec.helper';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {
  private size = 9;
  grid: Array<any> = new Array<any>(this.size);

  constructor() { }

  isBoardEmpty(): boolean {
    return (this.remainingMoves() === 9) ? true : false;
  }

  isValid(position: number): boolean {
    return (this.isValidRange(position) && this.isPositionEmpty(position));
  }

  printBoard() {
    console.log(this.grid);
  }

  placeMark(mark: string, position: number) {
    if (this.isValid(position)) {
      this.grid[position - 1] = mark;
    }
  }

  returnMark(position: number) {
    return this.grid[position - 1];
  }

  // remainingMoves() {
  //  let remaining = this.grid.filter(value => value === undefined);
  //   return remaining.length;
  // }

  remainingMoves() {
    let remaining = 0;
    for (let i = 0; i < 9; i++) {
      if (this.grid[i] === undefined) { remaining++; }
    }
    return remaining;
  }

  private isValidRange(position: number): boolean {
    return (position >= 1 && position <= 9);
  }

  private isPositionEmpty(position: number): boolean {
    return (this.grid[position] === undefined);
  }
}
