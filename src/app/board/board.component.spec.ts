import { SpecHelper } from './../spec-helper/spec.helper';
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

  describe('Board is empty', () => {
    it('creates an empty board', () => {
      const board = new BoardComponent();

      expect(board.isBoardEmpty()).toEqual(true);
    });

    it('adds move to an empty board', () => {
      const board = new BoardComponent();

      board.placeMark('X', 1);

      expect(board.isBoardEmpty()).toEqual(false);
    });
  });

  describe('Board is full', () => {
    it('an empty board is not full', () => {
      const board = new BoardComponent();

      expect(board.isBoardFull()).toEqual(false);
    });

    it('creates a full board', () => {
      const board = SpecHelper.setupBoard('X', 'X', 'X', 'O', 'X', 'X', 'X', 'X', 'X');

      expect(board.isBoardFull()).toEqual(true);
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

      board.placeMark('X', 0);

      expect(board.returnMark(0)).toBeUndefined();
    });

    it('does not place a mark when position already taken', () => {
      const board = SpecHelper.setupBoard('X', 'X', 'X', 'O', 'X', 'X', 'X', 'X', 'X');

      board.placeMark('O', 3);

      expect(board.returnMark(3)).toEqual('X');
    });
  });
});
