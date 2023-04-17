import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  
  constructor(private router:Router){}

  OnClickJourney1(){
  this.router.navigate(['./admin']);
}
  OnClickJourney2(){
  this.router.navigate(['./owner']);
}
OnClickJourney3(){
  this.router.navigate(['./user']);
}
}
