import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StringManipulationComponent } from './pages/string-manipulation/string-manipulation.component';
import { PipesComponent } from './pages/pipes/pipes.component';
import { PipesRoutingModule } from './pipes-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { HighlightModule } from 'ngx-highlightjs';

@NgModule({
  declarations: [
    StringManipulationComponent,
    PipesComponent
  ],
  imports: [
    CommonModule,
    PipesRoutingModule,
    HighlightModule
  ],
})
export class PipesModule { }
