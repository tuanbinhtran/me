import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppsComponent } from './pages/apps/apps.component';
import { AppsRoutingModule } from './apps-routing.module';



@NgModule({
  declarations: [AppsComponent],
  imports: [
    CommonModule,
    AppsRoutingModule,
  ]
})
export class AppsModule { }
