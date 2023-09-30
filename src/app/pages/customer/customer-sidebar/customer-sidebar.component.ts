import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-customer-sidebar',
  templateUrl: './customer-sidebar.component.html',
  styleUrls: ['./customer-sidebar.component.css']
})
export class CustomerSidebarComponent implements OnInit {

  constructor( public login:LoginService) { }

  ngOnInit(): void {
  }


  public logout(){
    this.login.logout();
    window.location.reload();
    localStorage.removeItem('userData');
    // Eliminar el token de acceso del localStorage o la cookie
    localStorage.removeItem('accessToken');
  }

}
