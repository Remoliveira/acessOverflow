import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  public users = new Array<User>();
  
  public usersFiltered = new Array<User>();

  constructor(private http: HttpClient, private router: Router) {
  }

  ngOnInit(){


    // return this.http.get<User[]>("http://localhost:3333/users").subscribe(users => this.users = users);

  }

  getUser(filter: string, orderBy: string, limit: number){

    let params = new HttpParams;
    
    params.set('filter',filter)
    params.set('orderBy',orderBy)
    params.set('limit',limit.toString())

    return this.http.get<User[]>("http://localhost:3333/users/sorted",{ params }).subscribe(usersFiltered => this.usersFiltered = usersFiltered)
   
  }

}

export class User{
  badge_counts= {
    bronze: Number,
    silver: Number,
    gold: Number,
  };
  user_id?: Number;
  is_employee?: Number;
  _id?: String;
  reputation?: String;
  link?: String;
}
