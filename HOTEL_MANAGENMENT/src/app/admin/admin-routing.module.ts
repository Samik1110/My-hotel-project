import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { SignInFormComponent } from '../sign-in-form/sign-in-form.component';

const routes: Routes = [
  { path: '', component: AdminComponent },
  {  path: 'sign-in-form' , component: SignInFormComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
