import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardComponent } from './board.component';

describe('BoardComponent', () => {
  let component: BoardComponent;
  let fixture: ComponentFixture<BoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BoardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  describe('board construction', () => {
    it('creates an empty board', () => {
      expect(component.isBoardEmpty()).toEqual(true);
    });
  });

  describe('making a move', () => {
    it('places a mark on the board', () => {
      const board = new BoardComponent();
      board.placeMark('X', 1);
      expect(board.returnMark(1)).toEqual('X');
    });

    it('does not place a mark outside the board', () => {
      const board = new BoardComponent();
      board.placeMark('X', -1);
      expect(board.returnMark(-1)).toBeUndefined();
    });

    it('does not place a mark when position already taken', () => {
      const board = new BoardComponent();
      board.placeMark('X', 3);
      board.placeMark('O', 3);
      expect(board.returnMark(3)).toEqual('X');
    });
  });
});
