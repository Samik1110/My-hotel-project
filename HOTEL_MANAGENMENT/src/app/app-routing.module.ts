// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { LandingComponent } from './landing/landing.component';
// import { SignInFormComponent } from './sign-in-form/sign-in-form.component';
// import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
// import { AdminComponent } from './admin/admin.component';
// import { OwnerComponent } from './owner/owner.component';
// import { UserComponent } from './user/user.component';
// import { CommonModule } from '@angular/common';
// import { LoginSuccessComponent } from './admin/login-success/login-success.component';
// import { HotelDetailsComponent } from './hotel-details/hotel-details.component';

// const routes: Routes = [
//   { path : '', component:LandingComponent},
//   { path: "landing", component : LandingComponent},
//   { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
//   { path: 'owner', loadChildren: () => import('./owner/owner.module').then(m => m.OwnerModule) },
//   { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
//   {  path: 'sign-in-form' , component: SignInFormComponent},
//   { path: 'sign-up-form' , component:SignUpFormComponent},
//   { path : 'admin' , component: AdminComponent},
//   { path : 'owner' , component: OwnerComponent},
//   { path : 'user' , component: UserComponent},
//   { path: 'loginsuccess', component: LoginSuccessComponent},
//   {path : 'hoteldetails' , component: HotelDetailsComponent},
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes), CommonModule],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [ ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
