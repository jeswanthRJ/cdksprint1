import { Component, OnInit } from '@angular/core';
import { LoginDetailsServiceService } from 'src/app/service/login-details-service.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  resend=false;
  countDown:any;
  counter = 120;
  tick = 1000;
  constructor( private LoginDetailsService:LoginDetailsServiceService ) {
   
   }

  ngOnInit(): void {
    this.countDown = this.LoginDetailsService.getCounter(this.tick)
    .subscribe(() => { this.counter--;
    if(this.counter==0){      
      this.resend=true;
      this.countDown.unsubscribe();
      console.log(this.LoginDetailsService.resend);           
    }
    });
   }

   ngOnDestroy(){
    this.countDown=null;
  }

  sendOtp() {
    
  }

  }