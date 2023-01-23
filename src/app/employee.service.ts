import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  baseUri='http://localhost:9090/api';
  constructor(public http: HttpClient) {}
      // fetch all using HTTP:GET
      fetchAll():Observable<any>{
        return this.http.get(`${this.baseUri}/findAll`);
      }
      delete(id :number): Observable<any>{
        return this.http.delete(`${this.baseUri}/delete/${id}`);
      }

      // store employee using HTTP:POST
      store (employee :any):Observable<any>{
        return this.http.post(`${this.baseUri}/save`,employee);
        // use form builder with id,name and salary
        // and call this store function from store component
      }

     
      
   }

