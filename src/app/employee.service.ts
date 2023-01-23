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
   }

