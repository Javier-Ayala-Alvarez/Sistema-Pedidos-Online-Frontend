import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CusCardsComponent } from 'src/app/cus-cards/cus-cards.component';

import { LoginService } from 'src/app/services/login/login.service';
import { MatDialog } from "@angular/material/dialog";
import { CusRegistrarseComponent } from 'src/app/cus-registrarse/cus-registrarse.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn = false;
  user: any = null;
  nombre: any = "";
  constructor(public login: LoginService, private router: Router, private activatedRoute: ActivatedRoute, private dialog: MatDialog, private loginService: LoginService) {

  }

  ngOnInit(): void {

    this.isLoggedIn = this.login.isLoggedIn();
    this.user = this.login.getUser();
    this.isLoggedIn = false;
    this.login.loginStatusSubjec.asObservable().subscribe(
      data => {
        this.isLoggedIn = this.login.isLoggedIn();

        this.user = this.login.getUser();
      }

    )


  }

  openModal() {
    const dialogRef = this.dialog.open(CusCardsComponent, {
      width: '800px', // Establece el ancho del diálogo modal según tus necesidades
      height: '400px',
      //data: {  id: id} /* Puedes pasar datos adicionales al diálogo modal si es necesario */
    });

    dialogRef.afterClosed().subscribe(result => {
      // Aquí puedes manejar cualquier lógica que desees realizar después de que se cierra el diálogo modal
    });
  }
  public logout() {
    this.login.logout();
    window.location.reload();

  }
  isMenuOpen = false;
  isModalOpen = false;
  usuario1 = false;
  mostrarColumna = true;


  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  usuario() {

    this.loginService.getCurrentUser().subscribe((user: any) => {
      console.log(user);
      this.nombre = "Usuario: " + user.username;
    })
    this.usuario1 = !this.usuario1;
  }

  registrar() {
    const dialogRef = this.dialog.open(CusRegistrarseComponent, {
      width: '900px', // Establece el ancho del diálogo modal según tus necesidades
      height: '550px',
      //data: {  id: id} /* Puedes pasar datos adicionales al diálogo modal si es necesario */
    });
    this.closeModal();
    dialogRef.afterClosed().subscribe(result => {
      // Aquí puedes manejar cualquier lógica que desees realizar después de que se cierra el diálogo modal
    });

  }
  closeModal() {
    throw new Error('Method not implemented.');
  }

  direccionar() {
    this.loginService.getCurrentUser().subscribe((user: any) => {
      this.loginService.setUser(user);
      console.log(user);
      if (this.loginService.getUserRole() == 'ADMIN') {
        //dashboard admin
        //window.location.href = '/admin';
        this.router.navigate(['admin/welcome']);
        this.loginService.loginStatusSubjec.next(true);
      }
      else if (this.loginService.getUserRole() == 'CLIENTE') {
        //user dashboard
        //window.location.href /user-dashboard
        this.router.navigate(['customer-dashboard/Category']);
        this.loginService.loginStatusSubjec.next(true);

      }
      else if (this.loginService.getUserRole() == 'COCINA') {
        this.router.navigate(['cocina-dashboard/cocina-welcome']);
        this.loginService.loginStatusSubjec.next(true);
      }
      else if (this.loginService.getUserRole() == 'DELIVERY') {
        this.router.navigate(['delivery-dashboard/delivery-welcome']);
        this.loginService.loginStatusSubjec.next(true);
      }
      else {
        this.loginService.logout();
      }
    })

    if (this.isLoggedIn1() == false) {
      this.router.navigate(['/']);
    }
  }


  isLoggedIn1(): boolean {
    return !!localStorage.getItem('accessToken');
  }
}
