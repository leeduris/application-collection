import { Component, OnInit } from '@angular/core';
import { clickedStateTrigger, numberEnteredStateTrigger } from './animations';

@Component({
  selector: 'app-trigger',
  templateUrl: './trigger.component.html',
  styleUrls: ['./trigger.component.css'],
  animations: [
    clickedStateTrigger,
    numberEnteredStateTrigger
  ]
})
export class TriggerComponent implements OnInit {
  clickInfo = 'default';
  paragraphClick = 'default';
  numberEntered;  

  constructor() { }

  ngOnInit() {
  }

  onClickSimple() {
    this.clickInfo = 'clicked';
    setTimeout(() => {
      this.clickInfo = 'default';
    }, 3000);
  }  

}
