import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keyframe',
  templateUrl: './keyframe.component.html',
  styleUrls: ['./keyframe.component.css']
})
export class KeyframeComponent implements OnInit {
  divClicked = false;
  doAnimate = false;

  constructor() { }

  ngOnInit() {
  }

}
