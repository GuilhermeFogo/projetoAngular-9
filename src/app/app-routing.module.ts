import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { RouteGuard } from './core/guard/route-guard';
import { GerenciaUserComponent } from './page/gerencia-user/gerencia-user.component';


const routes: Routes = [
  {
    path: '', component: LoginComponent
  },
  {
    path: 'home', loadChildren: () => import('./page/home/home.module').then(m => m.HomeModule), canActivate:[RouteGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
