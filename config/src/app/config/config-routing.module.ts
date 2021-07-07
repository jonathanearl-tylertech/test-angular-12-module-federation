import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigComponent } from './config.component';

const routes: Routes = [
  {
    path: '',
    component: ConfigComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('banner/Module').then(m => m.BannerModule),
        outlet: 'banner'
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigRoutingModule { }
