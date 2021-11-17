import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { proModel } from './promodel';
// import { Observable } from 'rxjs';
​
​
​
@Injectable({
  providedIn: 'root'
})
export class PdApiCallService {
  noproject=true;
  nodata=true;
​
  constructor( private http:HttpClient) { }
​
  postData(Data:proModel){
    return this.http.post('http://localhost:3000/posts/',Data)
     .pipe(map((res:any)=>{
       this.noproject=false;
       return res;
     }))  
   }
   getData(){
    return this.http.get('http://localhost:3000/posts/')
     .pipe(map((res:any)=>{
       if(res!=null){
         this.noproject=false;
       }
       return res;
       
     }))  
   }
/*    postData(TableData:datamodel){
    return this.http.post('cdk-logic-service/data/create/',TableData)
     .pipe(map((res:any)=>{
       this.noproject=false;
       return res;
     }))  
   }
   getData(){
    return this.http.get('cdk-logic-service/data/listbyprojectn/{name}
/')
     .pipe(map((res:any)=>{
       if(res!=null){
         this.noproject=false;
       }
       return res;
       
     }))  
   } */
}