import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./banner/banner.module').then(m => m.BannerModule)
  },
  {
    path: '',
    loadChildren: () => import('./omnibar/omnibar.module').then(m => m.OmnibarModule),
    outlet: 'omnibar'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
