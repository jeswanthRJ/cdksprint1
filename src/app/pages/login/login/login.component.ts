import { Component, OnInit, OnChanges } from '@angular/core';
import { LoginDetailsServiceService } from 'src/app/service/login-details-service.service';
import {MatIconModule} from '@angular/material/icon'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private LoginDetailsService: LoginDetailsServiceService) { }

  ngOnInit(): void {
    
  }
  bg:string = "assets/bg.jpg";
  email!: string;
  otp!: any;  
  resend=this.LoginDetailsService.resend;
  mailentered = this.LoginDetailsService.mailsuccess;
  
  sendOtp(mail: string) {
    this.mailentered=true;
    this.LoginDetailsService.sendOtp(mail);
  }
 
  proceed() {
    this.LoginDetailsService.proceed(this.email, this.otp)
  }

  ngOnChange(){
    this.resend=this.LoginDetailsService.resend;
  }
}
