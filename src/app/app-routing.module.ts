import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuardGuard } from './shared/guard/auth-guard.guard';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  {
    path: 'admin',
    canActivate: [authGuardGuard],
    loadChildren: () =>
      import('../app/admin/admin.module').then(x => x.AdminModule)
  }
];

export const RoutingModule = RouterModule.forRoot(routes, {
  useHash: true
});
