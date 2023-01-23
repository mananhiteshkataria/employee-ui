import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent {
  constructor(public builder:FormBuilder,public service:EmployeeService){}

  employeeForm=this.builder.group({
    id:["",[Validators.required]],
    name:["",[Validators.required,Validators.min(5),Validators.maxLength(10)]],
    salary:["",[Validators.required]]
  });

  message : undefined | string =undefined;
  onSubmit(){
    this.service.store(this.employeeForm.value).subscribe({
      next:value=>
      {
        this.message=`${value.name} is stored`;
        this.employeeForm.reset({});
      },
      error: err => console.log(err)
    });

  }

}
