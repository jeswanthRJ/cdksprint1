import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { timer } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class LoginDetailsServiceService {
  constructor(private router: Router, private http: HttpClient,) { }
  email!: string;
  mailsuccess = false;
  otp: any;
  resend = false;
  sendOtp(mail: string) {
    this.email = mail;
    this.mailsuccess = true;
    /* return this.http.post('http://cdk-auth-service/user/login/', this.email)
      .pipe(map((res: any) => {
        return res;
      })) */
  }
  proceed(formvalue: any) {
    this.otp = formvalue.otp;
    this.email = formvalue.email;
    this.mailsuccess = false;
    /* return this.http.post('http://cdk-auth-service/user/verifyotp/', formvalue)
      .pipe(map((res: any) => {
        return res;
      })) */
    this.router.navigate(['home']);
  }
  getCounter(tick: any) {
    return timer(0, tick)
  }
  resendOtp() {
    /* return this.http.post('http://cdk-auth-service/user/resendotp/', this.email)
      .pipe(map((res: any) => {
        return res;
      })) */
  }
}