import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing.component';
import { AdminComponent } from '../admin/admin.component';
import { OwnerComponent } from '../owner/owner.component';
import { UserComponent } from '../user/user.component';

const routes: Routes = [{ path: '', component: LandingComponent },
{ path : 'admin', component: AdminComponent},
{ path : 'owner' , component: OwnerComponent},
{ path : 'user' , component: UserComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
