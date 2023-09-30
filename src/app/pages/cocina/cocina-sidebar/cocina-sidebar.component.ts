import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-cocina-sidebar',
  templateUrl: './cocina-sidebar.component.html',
  styleUrls: ['./cocina-sidebar.component.css']
})
export class CocinaSidebarComponent implements OnInit{

  constructor(public login:LoginService){

  }
  ngOnInit(): void {

  }
  public logout(){
    this.login.logout();
    window.location.reload();
  }

}
