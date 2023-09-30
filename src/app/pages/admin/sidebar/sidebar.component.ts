import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(public login: LoginService) { }

  ngOnInit(): void {
  }
  public logout() {
    this.login.logout();
    window.location.reload();
    // Limpiar información de usuario almacenada en el cliente
    localStorage.removeItem('userData');
    // Eliminar el token de acceso del localStorage o la cookie
    localStorage.removeItem('accessToken');

  }

}
