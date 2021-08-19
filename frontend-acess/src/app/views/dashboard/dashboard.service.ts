import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../user/user.component';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]>{
    let params = new HttpParams;
    
    params.set('name','__v')
    params.set('value','0')
    return this.http.get<User[]>("http://localhost:3333/users/__v/0");
  }
}
