import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { blankspaces, passwordpattern } from '../shared/password-pattern';


@Component({
  selector: 'app-password-validation',
  templateUrl: './password-validation.component.html',
  styleUrls: ['./password-validation.component.css']
})
export class PasswordValidationComponent implements OnInit {
 
  // validateForm: boolean=false; 

  constructor() { }
  // clicksub() {

  //   console.log(this.loginForm.value);

  //   if(this.loginForm.valid)

  //   {

  //     this.validateForm=false

  //   }

  //   else

  //   this.validateForm=true

  //   this.loginForm.reset();

 

  // }
  get f()
  {
    return this.loginForm.controls;
  }
    loginForm =new FormGroup({
      email:new FormControl('',[Validators.required]),
      password:new FormControl('',[passwordpattern,blankspaces]),
      
    })
    loginUser()
    {
      alert("successfully signed in")
      this.loginForm.reset ();
      console.log(this.loginForm.value);
      
    }

  ngOnInit(): void {
  }

}
