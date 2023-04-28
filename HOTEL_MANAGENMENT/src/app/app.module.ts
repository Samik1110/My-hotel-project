// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { MatFormFieldModule ,MatLabel, MatError , MatFormFieldControl } from '@angular/material/form-field';
// // import { MAT_FORM_FIELD } from '@angular/material/form-field';
// import { SignInFormComponent } from './sign-in-form/sign-in-form.component';
// import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
// import {MatButtonModule} from '@angular/material/button';
// import { MatCardModule} from '@angular/material/card';     
// import { NgModel, ReactiveFormsModule } from '@angular/forms';
// import { MatInputModule} from '@angular/material/input';
// import { Sharetextpipe } from './sharetextpipe.pipe';
// import { HotelDetailsComponent } from './hotel-details/hotel-details.component';
// import { HttpClientModule } from '@angular/common/http';
// import { SharedModuleModule } from './shared-module/shared-module.module';
// import { RouterModule } from '@angular/router';
// import {MatRadioModule} from '@angular/material/radio';
// import { MatIconModule } from '@angular/material/icon';
// import { Router } from '@angular/router';
// import { CommonModule } from '@angular/common';
// import { MatPseudoCheckboxModule } from '@angular/material/core';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatCheckbox, MatCheckboxModule } from '@angular/material/checkbox';
// @NgModule({
//   declarations: [
//     AppComponent,
//     SignInFormComponent,
//     SignUpFormComponent,
//     Sharetextpipe,
//     HotelDetailsComponent,
    
   
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     MatFormFieldModule,
//     MatButtonModule,
//     MatCardModule,
//     ReactiveFormsModule,
//     MatInputModule,
//     HttpClientModule,
//     RouterModule,
//     MatRadioModule,
//     MatIconModule,
//     CommonModule,
//     BrowserModule,
//     MatPseudoCheckboxModule ,
//     BrowserAnimationsModule ,
//     MatCheckboxModule,
//     NgModule
//   ],

//   exports : [
//     MatInputModule, 
//     Sharetextpipe,
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations:[
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


