import { Component } from '@angular/core';
import { GameService } from '../shared/index';

@Component({
    selector: 'my-fruit',
    template: `<md-icon svgIcon="{{type}}"></md-icon>`
})
export class MyFruitComponent {
    type: string;

    constructor(private gameService: GameService) {
        this.type = this.gameService.fruit.type;
    }
}
