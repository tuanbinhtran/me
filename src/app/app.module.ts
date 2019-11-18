import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipesModule } from './modules/pipes/pipes.module';
import { HomeModule } from './modules/home/home.module';
import { AppsModule } from './modules/apps/apps.module';

export function getHighlightLanguages() {
  return {
    typescript: () => import('highlight.js/lib/languages/typescript'),
    scss: () => import('highlight.js/lib/languages/scss')
  };
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighlightModule,

    CoreModule,
    HomeModule,
    AppsModule,
    PipesModule,
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        languages: getHighlightLanguages(),
        lineNumber: true
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
