import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { KeyframeComponent } from './keyframe/keyframe.component';
import { TriggerComponent } from './trigger/trigger.component';
import { AnimationComponent } from './animation/animation.component';


const appRoutes: Routes = [
  { path: '', component: TriggerComponent },
  { path: 'keyframe', component: KeyframeComponent },
  { path: 'animation', component: AnimationComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
