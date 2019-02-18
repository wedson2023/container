import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ContainerComponent } from './container/container.component';

const routes: Routes = [
  {
    path : '',
    component : LoginComponent
  },
  {
    path : '',
    component : ContainerComponent,
    children : [
      {
        path : 'dashboard',
        loadChildren : './dashboard/dashboard.module#DashboardModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
