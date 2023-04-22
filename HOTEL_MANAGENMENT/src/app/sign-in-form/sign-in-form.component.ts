import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormControlName, FormGroup, Validators ,FormBuilder} from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';
import { DataServiceService } from '../data-service.service';
@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.css']
})
export class SignInFormComponent{

  loginform!: FormGroup;
  // endPoint:any;
  getApiData: any;
  endPoint : any;



  constructor(private fb: FormBuilder,
     private dataservice: DataServiceService, private router: Router) {

  }
  ngOnInit() {
   this.endPoint = this.dataservice.endPoint;
   console.log(" this.endPoint ", this.endPoint );
   
    this.login();
  }
  login() {
    this.loginform = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.pattern("[a-zA-Z]*$")]],
      password: ['', [Validators.required]]
    })
  }

  async submit() {
    console.log('login', this.loginform.value);
    this.getApiData = await this.dataservice.getApiCall(this.endPoint).toPromise();

    let loginData = this.getApiData.find((ele: any) => {
      return ele.name === this.loginform.value.name && ele.Password === this.loginform.value.password
    })
    if (loginData) {
      this.dataservice.signinOrSignUp = 'signIn';
      
      if (this.endPoint == 'admin') {
        alert('login successfully');
        this.router.navigateByUrl('/admin/loginSuccess')
      }
      else if (this.endPoint == 'owner') {
        alert('login successfully');
        this.dataservice.ownerName = this.loginform.value.name;
        this.router.navigateByUrl('/owner/loginSuccess')
      }
      else {
        this.router.navigateByUrl('/user/loginSuccess')
      }
    }
    else {
      alert('User not Fount')
      this.loginform.reset();
      this.router.navigateByUrl('/signIn');

    }
  }
  back(){
    if (this.endPoint == 'admin') {
      this.router.navigateByUrl('/admin')
    }
    else if (this.endPoint == 'owner') {
      this.router.navigateByUrl('/owner')
    }
    else {
      this.router.navigateByUrl('/user')
    }
  }
}