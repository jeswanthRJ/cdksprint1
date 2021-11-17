import { Component, OnInit } from '@angular/core';
import { MatDialog } from  '@angular/material/dialog';
import { PopUpComponent } from 'src/app/components/pop-up/pop-up.component';
import { PdApiCallService } from 'src/app/service/pd-api-call.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  noproject!:boolean;
  nodata!:boolean;
 
  
  constructor( private  dialogRef : MatDialog ,
    private https:PdApiCallService) { }

  ngOnInit(): void {
    this.https.getData();
    this.noproject=this.https.noproject;
    this.nodata=this.https.nodata;
    
    
  }
  openDialog(){
    this.dialogRef.open(PopUpComponent,{
      height:'208px',
      width: '470px',
    });
   
  }
  

}
