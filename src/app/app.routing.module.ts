import {LoginComponent} from './login/login.component'
import {DashboardComponent} from './dashboard/dashboard.component'
import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
  ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }