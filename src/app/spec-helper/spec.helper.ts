import { BoardComponent } from '../board/board.component';

export class SpecHelper {
    static setupBoard(...args: string[]): BoardComponent {
        const board = new BoardComponent();
        board.placeMark(args[0], 1);
        board.placeMark(args[1], 2);
        board.placeMark(args[2], 3);
        board.placeMark(args[3], 4);
        board.placeMark(args[4], 5);
        board.placeMark(args[5], 6);
        board.placeMark(args[6], 7);
        board.placeMark(args[7], 8);
        board.placeMark(args[8], 9);
        return board;
    }
    constructor() {}

}
