import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {  passwordpattern } from '../shared/password-validator';


@Component({
  selector: 'app-password-validation',
  templateUrl: './password-validation.component.html',
  styleUrls: ['./password-validation.component.css']
})
export class PasswordValidationComponent implements OnInit {
  constructor() { }
  validateform:boolean = false;
  validated = false; 
  get f()
  {
    return this.loginForm.controls;
  }
    loginForm =new FormGroup({
      email:new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required,passwordpattern])      
    })
    loginUser()
    {
      if(this.loginForm.valid){
        this.validateform = false
        alert("successfully signed in")
        this.loginForm.reset ();
      }
    else{
      this.validateform = true;
    }     
    }
    reset(){
      this.loginForm.reset();
      this.validateform=false;
    }
  ngOnInit(): void {
  }

}
