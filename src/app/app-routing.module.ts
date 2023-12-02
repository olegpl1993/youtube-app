import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import authGuard from './auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./youtube/youtube.module').then((m) => m.default),
    canActivate: [authGuard],
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.default),
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then((m) => m.default),
    canActivate: [authGuard],
  },
  {
    path: '**',
    loadComponent: () =>
      import('../shared/page-not-found/page-not-found.component').then(
        (m) => m.default
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export default class AppRoutingModule {}
