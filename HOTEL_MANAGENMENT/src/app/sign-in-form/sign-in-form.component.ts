import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.css']
})
export class SignInFormComponent {
  constructor(private router:Router){}

  submit(){
    alert( 'your form submit successfully');
  }

  OnClickJourney6(){
    this.router.navigate(['./admin']);
  }
}
