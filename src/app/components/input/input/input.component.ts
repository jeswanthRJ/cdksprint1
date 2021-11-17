import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  public formField?:AbstractControl
  @Input()
  group!: FormGroup;
@Input() type?: string;
@Input() name!: string;
@Input() label?: string;
@Input() required?: boolean;
@Input() isFormSubmitted?: boolean;
@Input() modelValue?: string;
@Input() isEdit = true
@Input() placeholder = '';
@Input() maxLength: number=50;
@Input() textarea:boolean=false;
constructor( public formBuilder:FormBuilder) { }
  ngOnInit(): void {
    if (!this.group) {
      this.group = this.formBuilder.group({ [this.name]: [this.modelValue || null] });
    }
    this.formField = this.group.controls[this.name];
  }
}
