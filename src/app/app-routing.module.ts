import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SideMainNavComponent } from './layouts/side-main-nav/side-main-nav.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./views/auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: 'admin',
    children: [
      { path: '', loadChildren: () => import('./views/admin/admin.module').then(m => m.AdminModule) }
    ],
    component: SideMainNavComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
