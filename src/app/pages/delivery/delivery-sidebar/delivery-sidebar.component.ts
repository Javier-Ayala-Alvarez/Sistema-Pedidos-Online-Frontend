import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-delivery-sidebar',
  templateUrl: './delivery-sidebar.component.html',
  styleUrls: ['./delivery-sidebar.component.css']
})
export class DeliverySidebarComponent implements OnInit{

  constructor(public login:LoginService){
  }

  ngOnInit(): void {
  }

  public logout(){
    this.login.logout();
    window.location.reload();
  }

}
