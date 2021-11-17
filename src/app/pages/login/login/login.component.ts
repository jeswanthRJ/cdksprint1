import { Component, OnInit, OnChanges } from '@angular/core';
import { LoginDetailsServiceService } from 'src/app/service/login-details-service.service';
import { AbstractControl } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm!:FormGroup;
  constructor(private LoginDetailsService: LoginDetailsServiceService,
              private formBuilder:FormBuilder) { }
  ngOnInit(): void {
    this.loginForm= this.formBuilder.group({      
        email:['',[Validators.required,Validators.email]],
        otp:[''],      
    })
  }
  bg:string = "assets/bg.jpg";
  email1!: string;
  otp!: any;  
  resend=this.LoginDetailsService.resend;
  mailentered = this.LoginDetailsService.mailsuccess;
  sendOtp() {
    if(this.loginForm.valid){
    this.mailentered=true;  
    this.email1=this.loginForm?.get('email')?.value;  
    this.LoginDetailsService.sendOtp(this.email1);
    // .subscribe(res=>{
    // })
  }
  }
  proceed() {
//    const email1=this.loginForm?.get('email')?.value;
    this.LoginDetailsService.proceed(this.loginForm?.value)
    // .subscribe(res=>{
    // })
  }
  ngOnChange(){
    this.resend=this.LoginDetailsService.resend;
  }
  clear(){
    this.mailentered=false;    
  }
  resendOtp(){
    this.LoginDetailsService.resendOtp();
    // .subscribe(res=>{
    // })
  }
}

