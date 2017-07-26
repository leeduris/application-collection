import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import * as _ from 'lodash/index';
import { MdIconRegistry } from '@angular/material';
import { GameService } from './shared/index';


@Component({
  selector: 'app-root',
  template: `
    <md-card class="container">
      <md-card-content>
        <tool-bar></tool-bar>
      </md-card-content>  
      <md-card-content>
        <game-board></game-board>
      </md-card-content>  
    </md-card>
  `,
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
      constructor(
        public sanitizer: DomSanitizer, 
        mdIconRegistry: MdIconRegistry, 
        private gameService: GameService) 
      {
        _(this.gameService.fruitType).each((value: string) => {
            mdIconRegistry.addSvgIcon(
              value, 
              sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/' + value + '.svg'));
        });

        mdIconRegistry.addSvgIcon(
          'play', 
          sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/play.svg')
        );
        mdIconRegistry.addSvgIcon(
          'stop', 
          sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/stop.svg')
        );
        mdIconRegistry.addSvgIcon(
          'circle', 
          sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/circle.svg')
        );
      }
}
