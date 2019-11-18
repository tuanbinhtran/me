import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PipesComponent } from './pages/pipes/pipes.component';
import { StringManipulationComponent } from './pages/string-manipulation/string-manipulation.component';

const routes: Routes = [
  { path: '', component: PipesComponent },
  { path: 'string-manipulation', component: StringManipulationComponent },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule,
  ]
})
export class PipesRoutingModule { }
