import { DashboardService } from './dashboard.service';
import { User } from './../../user/user.component';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  users: User[];

  constructor(private service: DashboardService){}
 
  ngOnInit() {
    
    this.service.getUsers().subscribe((objUser)=>{ 
    this.users = objUser
    console.log(this.users)
    })
  }
}
