import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FileUploadService } from 'src/app/service/file-upload.service';
import { PdApiCallService } from 'src/app/service/pd-api-call.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  data : any;
  data2:any;
  selectedFiles?: FileList;
  selectedFileNames: string[] = [];
  nofile=true;
  progressInfos: any[] = [];
  message: string[] = [];
  previews: string[] = [];
  imageInfos?: Observable<any>;
  public dataForm: FormGroup ;
  constructor( private router:Router,
    private https : PdApiCallService,
    private formlist : FormBuilder,
    private  uploadService:FileUploadService ) { }
  ngOnInit(): void {
    this.imageInfos = this.uploadService.getFiles();
     this.getdata();
    this.dataForm = this.formlist.group({
      projectid:[''],
      name:[''],
      databig:[''],
      fileid:['']
    })
  }
  back(){
 this.router.navigate(["home"]);
  }
  getdata(): void{
    this.https.getData().subscribe(res=>{
      this.data = res;
      console.log(res);
      console.log(this.data);
    })
  }
  postdata(){
    console.log(this.dataForm)
  }
  selectFiles(event: any): void {
    this.message = [];
    this.progressInfos = [];
    this.selectedFileNames = [];
    this.selectedFiles = event.target.files;
    this.previews = [];
    if (this.selectedFiles && this.selectedFiles[0]) {
      const numberOfFiles = this.selectedFiles.length;
      for (let i = 0; i < numberOfFiles; i++) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          console.log(e.target.result);
          this.previews.push(e.target.result);
        };
        reader.readAsDataURL(this.selectedFiles[i]);
        this.selectedFileNames.push(this.selectedFiles[i].name);
      }
    }
  }
  upload(idx: number, file: File): void {
    this.progressInfos[idx] = { value: 0, fileName: file.name };
    if (file) {
      this.uploadService.upload(file).subscribe(
        (event: any) => {
          if (event.type === HttpEventType.UploadProgress) {
            this.progressInfos[idx].value = Math.round(
              (100 * event.loaded) / event.total
            );
          } else if (event instanceof HttpResponse) {
            const msg = 'Uploaded the file successfully: ' + file.name;
            this.message.push(msg);
            this.imageInfos = this.uploadService.getFiles();
            this.nofile=false;
          }
        },
        (err: any) => {
          this.progressInfos[idx].value = 0;
          const msg = 'Could not upload the file: ' + file.name;
          this.message.push(msg);
        }
      );
    }
  }
  uploadFiles(): void {
    this.message = [];
    if (this.selectedFiles) {
      for (let i = 0; i < this.selectedFiles.length; i++) {
        this.upload(i, this.selectedFiles[i]);
      }
    }
    this.nofile=false;
  }
  removeFiles(){
     this.selectedFiles=null;
     this.selectedFileNames=null;
     this.nofile=true;
  }
  }