import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import {UserService} from '../shared-service/user.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginsubmitted = false
  loginForm:FormGroup;
  public userdata: any;
  public errorShowLogin = false;
  public errorMsg: any;
  public loggedIn = false
  constructor(private formBuilder:FormBuilder, private userService:UserService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password:['', Validators.required, Validators.minLength[6]]
    })
  }
  get g() {
    return this.loginForm.controls
  }
  loginSubmit(){
    this.loginsubmitted = true;
    this.userService.loggedIn(this.loginForm.value)
    .subscribe(
      (data)=>{
        this.loggedIn = true
       this.errorShowLogin = false
        // this.router.navigate(['/app/user-profile'])
     },
     (error)=>{
       this.loggedIn = false;
      this.errorShowLogin = true;
            this.errorMsg = error.error
          }
     )
  }
}
