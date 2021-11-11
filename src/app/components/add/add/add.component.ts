import { Component, OnInit } from '@angular/core';
import { MatDialog } from  '@angular/material/dialog';
import { PopUpComponent } from '../../pop-up/pop-up.component';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  constructor( private  dialogRef : MatDialog ) { }

  ngOnInit(): void {
  }

  openDialog(){
    this.dialogRef.open(PopUpComponent,{
      height:'208px',
      width: '470px',
    });
   
  }

}
