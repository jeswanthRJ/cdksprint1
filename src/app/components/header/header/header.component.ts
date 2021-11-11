import { Component, OnInit } from '@angular/core';
import { LoginDetailsServiceService } from 'src/app/service/login-details-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  email!: string;
  temp!:any;
  names!:any;
  constructor(private LoginDetailsService: LoginDetailsServiceService) { }

  ngOnInit(): void {
    this.email = this.LoginDetailsService.email;
    this.temp=this.email.replace(/@.*/,"");
    this.names=this.temp.replace(/\./g,' ');
    console.log(this.email);
    console.log(this.names);
  }

}
