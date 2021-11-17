import { Component, OnInit } from '@angular/core';
import { PdApiCallService } from 'src/app/service/pd-api-call.service';
import { FormGroup,FormControl,Validators } from '@angular/forms';
// import { dataModel } from 'backup-code/src/app/service/datamodel';
​
@Component({
  selector: 'app-datalist',
  templateUrl: './datalist.component.html',
  styleUrls: ['./datalist.component.scss']
})
export class DatalistComponent implements OnInit {
​
/*   data : any;
  dataForm : FormGroup; */
  constructor( private https:PdApiCallService) { }
​
  ngOnInit(): void {
​
  }
/*   datadetails(){
    this.https.postData(this.dataForm.Value)
   .subscribe(res=>{
     console.log(res);
     this.dataForm.reset();
   })
   } */
/*    getdata(): void{
    this.https.getData().subscribe(res=>{
      this.data = res;
      
    }) */
  
}