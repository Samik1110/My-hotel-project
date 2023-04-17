import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatFormFieldControl } from '@angular/material/form-field';
import { MatLabel } from '@angular/material/form-field';

@NgModule({
  declarations: [
    UserComponent],
   
  imports: [
    CommonModule,
    UserRoutingModule,
    MatFormFieldModule,
    MatFormFieldModule,
    MatButtonModule,


  ]
})
export class UserModule { }
