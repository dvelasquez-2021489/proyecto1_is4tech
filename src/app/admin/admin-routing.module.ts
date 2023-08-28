import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DogsComponent } from './components/dogs/dogs.component';
import { authGuardGuard } from '../shared/guard/auth-guard.guard';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'dogs',
        canActivate: [authGuardGuard],
        component: DogsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
