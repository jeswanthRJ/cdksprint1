import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
public userForm?:FormGroup
  constructor( private fb: FormBuilder) {
    this.userForm=this.fb.group({
      projectName:['',Validators.required],
      projectData:[],
   })
}

}
