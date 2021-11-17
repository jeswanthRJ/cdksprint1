import { Component, OnInit } from '@angular/core';
import { MatDialog } from  '@angular/material/dialog';
import { PdApiCallService } from 'src/app/service/pd-api-call.service';
import { PopUpComponent } from '../../pop-up/pop-up.component';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  data: Array<any>
  constructor( private  dialogRef : MatDialog ,
    private https:PdApiCallService) { 
    this.data = new Array<any>()
  }
  ngOnInit(): void {
    this.getdata();
  }

  openDialog(){
    this.dialogRef.open(PopUpComponent,{
      height:'208px',
      width: '470px',
    });
   
  }
  getdata(): void{
    this.https.getData().subscribe(res=>{
      this.data = res;
      
    })
  }

}
