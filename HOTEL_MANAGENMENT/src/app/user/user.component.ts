import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  constructor(private router:Router){}

  OnClickJourney9(){
    this.router.navigate(['./landing']);
  }
}
