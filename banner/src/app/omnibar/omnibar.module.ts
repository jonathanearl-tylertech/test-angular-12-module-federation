import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OmnibarRoutingModule } from './omnibar-routing.module';
import { OmnibarComponent } from './omnibar.component';


@NgModule({
  declarations: [
    OmnibarComponent
  ],
  imports: [
    CommonModule,
    OmnibarRoutingModule
  ]
})
export class OmnibarModule { }
