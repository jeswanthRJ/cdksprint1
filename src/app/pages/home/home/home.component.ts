import { Component, OnInit } from '@angular/core';
import { MatDialog } from  '@angular/material/dialog';
import { PopUpComponent } from 'src/app/components/pop-up/pop-up.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  noproject!:boolean;
  nodata!:boolean;
  
  constructor( private  dialogRef : MatDialog ) { }

  ngOnInit(): void {
    this.noproject=true;
    this.nodata=true;
  }
  openDialog(){
    this.dialogRef.open(PopUpComponent,{
      height:'208px',
      width: '470px',
    });
   
  }

}
