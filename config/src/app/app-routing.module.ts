import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'config',
    loadChildren: () => import('./config/config.module').then(m => m.ConfigModule )
  },
  {
    path: '',
    loadChildren: () => import('banner/Module').then(m => m.BannerModule),
    outlet: 'banner'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
