import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameComponent } from './game.component';

describe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameComponent ]
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
      const game = new GameComponent();
      expect(game.currentPlayer).toEqual('X');
    });
    it('changes current player to player O after player X', () => {
      const game = new GameComponent();
      game.advancePlayer();
      expect(game.currentPlayer).toEqual('O');
    });
 });
