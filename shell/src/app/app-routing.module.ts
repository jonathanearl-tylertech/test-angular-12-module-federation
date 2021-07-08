import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('banner/Module').then(m => m.ConfigModule),
  // },
  // {
  //   path: 'config',
  //   loadChildren: () => import('config/Module').then(m => m.ConfigModule),
  // },
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
    path: 'banner',
    loadChildren: () => {
      return loadRemoteModule({
        remoteEntry: 'http://localhost:5000/remoteEntry.js',
        remoteName: 'banner',
        exposedModule: './Module'
      })
      .then(m => m.BannerModule) }
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
