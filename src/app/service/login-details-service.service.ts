import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginDetailsServiceService {

  constructor( private router : Router) { }
  email!:string;
  mailsuccess=false;
  otp:any;
  resend=false;

sendOtp(mail: string){
    this.email=mail;
    this.mailsuccess=true;
}

proceed(mail: string,otp: any){
  this.otp=otp;
  this.email=mail;
  this.mailsuccess=false;
  this.router.navigate(['home']);
}

getCounter(tick: any) {
  
  return timer(0, tick) 
}
}