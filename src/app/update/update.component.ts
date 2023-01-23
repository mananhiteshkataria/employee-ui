import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  constructor(public builder:FormBuilder,public service:EmployeeService){}

 updateEmpForm=this.builder.group({
  id:["",Validators.required],
  salary:["",[Validators.required]],
 });

 message : undefined | string =undefined;

 onSubmit(){
  
 }



}
