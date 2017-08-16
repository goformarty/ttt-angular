import { SpecHelper } from '../spec-helper/spec.helper';
import { BoardComponent } from './../board/board.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GameComponent } from './game.component';

describe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GameComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
describe('current player', () => {
  it('empty board starts with player X', () => {
    const board = new BoardComponent();
    const game = new GameComponent(board);

    expect(game.currentPlayer).toEqual('X');
  });

  it('changes players when you make a move', () => {
    const board = new BoardComponent();
    const game = new GameComponent(board);

    game.makeMove(1);

    expect(game.currentPlayer).toEqual('O');
  });
});

describe('determines a draw', () => {
  it('empty board is not a draw', () => {
    const board = new BoardComponent();
    const game = new GameComponent(board);

    expect(game.isDraw()).toEqual(false);
  });
  it('game not won and with no remaining moves is a draw', () => {
    const board = SpecHelper.setupBoard('X', 'O', 'X', 'X', 'O', 'O', 'O', 'X', 'X');
    const game = new GameComponent(board);

    expect(game.isDraw()).toEqual(true);
  });
});

describe('determines a win', () => {
  it('empty board is not a win', () => {
    const board = new BoardComponent();
    const game = new GameComponent(board);

    expect(game.isWon()).toEqual(false);
  });
  describe('row win', () => {
    it('not finshed top row is not a win', () => {
      const board = SpecHelper.setupBoard('X', 'X', undefined, undefined, undefined, undefined, undefined, undefined, undefined);
      const game = new GameComponent(board);

      expect(game.isWon()).toEqual(false);
    });

    it('top row wins when board not full', () => {
      const board = SpecHelper.setupBoard('X', 'X', 'X', undefined, undefined, undefined, undefined, undefined, undefined);
      const game = new GameComponent(board);

      expect(game.isWon()).toEqual(true);
    });

    it('top row wins when board full', () => {
      const board = SpecHelper.setupBoard('X', 'X', 'X', 'O', 'X', 'O', 'X', 'O', 'O');
      const game = new GameComponent(board);

      expect(game.isWon()).toEqual(true);
    });
  });
  describe('colummn win', () => {
    it('not finished first column is not a win', () => {
      const board = SpecHelper.setupBoard('X', undefined, undefined, 'X', undefined, undefined, undefined, undefined, undefined);
      const game = new GameComponent(board);

      expect(game.isWon()).toEqual(false);
    });

    it('first column wins when board not full', () => {
      const board = SpecHelper.setupBoard('X', undefined, undefined, 'X', undefined, undefined, 'X', undefined, undefined);
      const game = new GameComponent(board);

      expect(game.isWon()).toEqual(true);
    });

    it('column wins when board full', () => {
      const board = SpecHelper.setupBoard('X', undefined, undefined, 'X', undefined, undefined, 'X', undefined, undefined);
      const game = new GameComponent(board);

      expect(game.isWon()).toEqual(true);
    });
  });
  describe('diagonal win', () => {
    it('not finished diagonal is not a win', () => {
      const board = SpecHelper.setupBoard('X', undefined, undefined, undefined, 'X', undefined, undefined, undefined, undefined);
      const game = new GameComponent(board);

      expect(game.isWon()).toEqual(false);
    });

    it('diagonal wins when board not full', () => {
      const board = SpecHelper.setupBoard('X', undefined, undefined, undefined, 'X', undefined, undefined, undefined, 'X');
      const game = new GameComponent(board);

      expect(game.isWon()).toEqual(true);
    });

    it('diagonal wins when board full', () => {
      const board = SpecHelper.setupBoard('X', 'O', 'X', 'X', 'X', 'O', 'O', 'O', 'X');
      const game = new GameComponent(board);

      expect(game.isWon()).toEqual(true);
    });
  });
});

