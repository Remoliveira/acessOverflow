import { DashboardService } from './dashboard.service';
import { User } from './../../user/user.component';
import { Component, OnInit } from '@angular/core';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { UserComponent } from '../../user/user.component';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  private users = new Array<User>();

  constructor(private service: DashboardService){}
 
  ngOnInit() {
    
    this.service.getUsers().subscribe((objUser)=>{ console.log(objUser[0])
    this.users = objUser[0]
    })
  }
}
