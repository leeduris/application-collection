import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, ApplicationRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule, OverlayContainer, FullscreenOverlayContainer } from '@angular/material';
import 'lodash';

import { AppComponent } from './app.component';
import { GameBoardComponent, MyFruitComponent, MySnakeComponent }  from './game-board/index';
import { ToolBarComponent }  from './tool-bar/index';
import { FooterComponent }  from './footer/index';

import { GameService } from './shared/index';


@NgModule({
  declarations: [
    AppComponent,    
    GameBoardComponent,
    ToolBarComponent,
    FooterComponent,
    MyFruitComponent,
    MySnakeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    NoopAnimationsModule,    
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [
    GameService,
    OverlayContainer,
    FullscreenOverlayContainer
  ],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})

export class AppModule {
    constructor(private _appRef: ApplicationRef) { }

  ngDoBootstrap() {
    this._appRef.bootstrap(AppComponent);
  }
 }

