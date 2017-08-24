import { EventEmitter } from 'events';
import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent {
  @Input() state;
  @Output() swapColourMark: EventEmitter = new EventEmitter();
  swapColorMark() {
  }
}

