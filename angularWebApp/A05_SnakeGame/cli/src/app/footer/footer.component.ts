import { Component } from '@angular/core';

@Component({
    selector: 'footer',
    template: '<div>{{copyright}}</div>',
    styles: [`
        :host{
            color: #607D8B;
            text-align: center;
        }
    `]
})
export class FooterComponent {
    copyright: string;

    constructor() {
        this.copyright = 'Just Practice Makes Perfect';
    }
}
