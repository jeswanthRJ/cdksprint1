import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { PdApiCallService } from 'src/app/service/pd-api-call.service';
@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent implements OnInit {

  data : Array<any>
  proform : FormGroup;
  constructor(private https:PdApiCallService) { }
  
  ngOnInit(): void {
    this.proform= new FormGroup({
      
      'proname' : new FormControl('',Validators.required),
  })

}
projectdetails(){
 this.https.postData(this.proform.value)
.subscribe(res=>{
  console.log(res);
  this.proform.reset();
})
}

}
