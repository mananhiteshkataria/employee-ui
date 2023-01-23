import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-find-all',
  templateUrl: './find-all.component.html',
  styleUrls: ['./find-all.component.css']
})
export class FindAllComponent {
    employees : any =[];
    constructor(public service:EmployeeService){ }
    refresh(): void{
      this.service.fetchAll()
      .subscribe({
        next:(value)=> this.employees=value,
        error:(err)=> console.log(err)
        })
    }
}
