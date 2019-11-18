import { Routes } from '@angular/router';

export const routes: Routes = [
    // { path: '', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
    { path: 'apps', loadChildren: () => import('./modules/apps/apps.module').then(m => m.AppsModule) },
    { path: 'pipes', loadChildren: () => import('./modules/pipes/pipes.module').then(m => m.PipesModule) },
];
