import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import {UserService} from '../shared-service/user.service'
@Component({
  selector: 'app-registartion',
  templateUrl: './registartion.component.html',
  styleUrls: ['./registartion.component.scss']
})
export class RegistartionComponent implements OnInit {
  signupForm: FormGroup;
  submitted = false;
  errorShow = false;
  public confirmPasswordError = false
  public errorMsg: any;
  public signupDoneMsg;
  public signupScree= true;
  constructor(private formBuilder: FormBuilder, private userService:UserService ) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required,Validators.minLength(6)]],
     
    
    })
  }

  get g() {
    return this.signupForm.controls
  }
  signup() {
    this.submitted = true;
   

      this.userService.signupApi(this.signupForm.value).subscribe(
        (data) => {
          this.signupDoneMsg = true;
          this.signupScree = false;
        },
        (error) => {
          this.errorShow = true;
          this.errorMsg = error.error
          console.log("error" + error.error.title)
        }
      )
    
  }
}
