import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-find-all',
  templateUrl: './find-all.component.html',
  styleUrls: ['./find-all.component.css']
})
export class FindAllComponent {
    message: undefined | string=undefined;
    employees : any =[];
    constructor(public service:EmployeeService){ }
    refresh(): void{
      this.service.fetchAll()
      .subscribe({
        next:(value)=> this.employees=value,
        error:(err)=> console.log(err)
        })
    }

    delete(id: number){
      this.service.delete(id).subscribe({
        next:(value)=>{
          // {message":"}
          this.message=value.message;
          this.refresh();
          // make message empty after 5s
          setTimeout(()=> this.message= "",5000);
        },
        error:(err)=>console.log(err)
      });
    }
}
