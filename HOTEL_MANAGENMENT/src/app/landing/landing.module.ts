import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatFormFieldControl } from '@angular/material/form-field';
import { MatLabel } from '@angular/material/form-field';

@NgModule({
  declarations: [
    LandingComponent,
  
  ],
  imports: [
    CommonModule, 
    LandingRoutingModule,
    MatFormFieldModule,
    MatFormFieldModule,
    MatButtonModule,




  ]
})
export class LandingModule { }
