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
  it('determines empty board is not a draw', () => {
    const board = new BoardComponent();
    const game = new GameComponent(board);

    expect(game.isDraw()).toEqual(false);
  });
  it('determines game not won and with no remaining moves is a draw', () => {
    const board = SpecHelper.setupBoard('X', 'O', 'X', 'X', 'O', 'O', 'O', 'X', 'X');
    const game = new GameComponent(board);

    expect(game.isDraw()).toEqual(true);
  });

  // Given I setup a new game

  // I play a drawn game

  // Expect game to be drawn

});
