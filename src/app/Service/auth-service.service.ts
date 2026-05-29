import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../Interface/login';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  appurl:string='http://localhost:5114/api/Auth/login';

  constructor(private http:HttpClient) { }

  login(data:Login):Observable<any>
  {
    return this.http.post(`${this.appurl}`,data)
  }
}
