import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnerRoutingModule } from './owner-routing.module';
import { OwnerComponent } from './owner.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatFormFieldControl } from '@angular/material/form-field';
import { MatLabel } from '@angular/material/form-field';

@NgModule({
  declarations: [
    OwnerComponent,
    
  ],
  imports: [
    CommonModule,
    OwnerRoutingModule,
    MatFormFieldModule,
    MatFormFieldModule,
    MatButtonModule,


  ]
})
export class OwnerModule { }
