import { Component, OnInit } from '@angular/core';
import { AnimationEvent } from '@angular/animations';
import { animateStateTrigger, listStateTrigger, showStateTrigger } from './animations';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
  animations: [
    showStateTrigger,
    animateStateTrigger,
    listStateTrigger
  ]  
})
export class AnimationComponent implements OnInit {
  isShown = false;
  width = 400;
  animate = false;
  testResults = [];

  constructor() { }

  ngOnInit() {
  }

  onAddElement() {
    this.testResults.push(Math.random());
  }

  onAnimationStarted(event: AnimationEvent) {
    console.log(event);
  }

  onAnimationDone(event: AnimationEvent) {
    console.log(event);
  }  

}
