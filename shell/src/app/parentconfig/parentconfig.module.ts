import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParentconfigRoutingModule } from './parentconfig-routing.module';
import { ParentconfigComponent } from './parentconfig.component';


@NgModule({
  declarations: [
    ParentconfigComponent
  ],
  imports: [
    CommonModule,
    ParentconfigRoutingModule
  ]
})
export class ParentconfigModule { }
