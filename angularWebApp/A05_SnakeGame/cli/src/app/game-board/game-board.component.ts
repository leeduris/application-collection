import { Component } from '@angular/core';
import { GameService } from '../shared/index';

@Component({
    selector: 'game-board',
    template: `
        <div class="row" *ngFor="let column of board; let y=index">
			<div class="column"
			     *ngFor="let row of column; let x=index; trackBy:x"
			     [style.background-color]="setStyling()">
				<my-fruit *ngIf="setFruit(y, x)"></my-fruit>
				<my-snake *ngIf="setSnake(y, x)"></my-snake>
			</div>
		</div>`,
    styles: [
        ':host {margin: 10px;' +
        'box-shadow: 0px 4px 5px -2px rgba(0,0,0,.2),0px 7px 10px 1px rgba(0,0,0,.14),0px 2px 16px 1px rgba(0,0,0,.12);' +
        'display: block;}',
        '.row {height: 29px;}',
        '.column {border: 1px dotted #455A64; width: 29px; height: 29px; display: inline-block; vertical-align: middle;' +
        'text-align: center;}'
    ],
})

export class GameBoardComponent {
    board: boolean[][];

    constructor(private gameService: GameService) {
        this.board = this.gameService.board;
    }

    setStyling() {
        return this.gameService.getStyling();
    }

    setFruit(col: number, row: number) {
        return this.gameService.getFruit(col, row);
    }

    setSnake(col: number, row: number) {
        return this.gameService.getSnake(col, row);
    }
}
