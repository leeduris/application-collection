import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '../_animations/index';

@Component({
  moduleId: module.id.toString(),  
  selector: '',
  templateUrl: './home.component.html',
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }  
})

export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
