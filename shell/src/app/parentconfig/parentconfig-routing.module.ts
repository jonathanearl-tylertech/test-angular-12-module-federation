import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentconfigComponent } from './parentconfig.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

const routes: Routes = [
  {
    path: '',
    component: ParentconfigComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParentconfigRoutingModule { }
