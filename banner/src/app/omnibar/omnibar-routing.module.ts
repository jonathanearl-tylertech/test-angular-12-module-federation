import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OmnibarComponent } from './omnibar.component';

const routes: Routes = [
  {
    path: '',
    component: OmnibarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OmnibarRoutingModule { }
