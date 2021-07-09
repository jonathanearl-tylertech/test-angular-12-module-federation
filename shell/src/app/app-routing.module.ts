import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

const routes: Routes = [

  {
    path: 'config',
    loadChildren: () => {
      return loadRemoteModule({
        remoteEntry: 'http://localhost:5001/remoteEntry.js',
        remoteName: 'config',
        exposedModule: './Module'
      })
      .then(m => m.ConfigModule) }
  },
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => {
      return loadRemoteModule({
        remoteEntry: 'http://localhost:5000/remoteEntry.js',
        remoteName: 'banner',
        exposedModule: './Module'
      })
      .then(m => m.BannerModule) },
    outlet: 'banner'
  },
  {
    path: '',
    loadChildren: () => {
      return loadRemoteModule({
        remoteEntry: 'http://localhost:5000/remoteEntry.js',
        remoteName: 'banner',
        exposedModule: './Omnibar'
      })
      .then(m => m.OmnibarModule) },
    outlet: 'omnibar'
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then(m => m.AboutModule),
  },
  {
    path: '',
    loadChildren: () => import('./parentconfig/parentconfig.module').then(m => m.ParentconfigModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
