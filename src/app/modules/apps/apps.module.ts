import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppsComponent } from './pages/apps/apps.component';
import { AppsRoutingModule } from './apps-routing.module';
import { AppListComponent } from './components/app-list/app-list.component';
import { AppComponent } from './components/app/app.component';



@NgModule({
  declarations: [AppsComponent, AppListComponent, AppComponent],
  imports: [
    CommonModule,
    AppsRoutingModule,
  ]
})
export class AppsModule { }
