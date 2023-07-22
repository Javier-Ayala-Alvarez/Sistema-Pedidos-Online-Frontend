import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { CusCardsComponent } from 'src/app/cus-cards/cus-cards.component';
import { CusCardsService } from 'src/app/services/cusCards/cus-cards.service';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn=false;
  user:any=null;
  constructor(public login:LoginService,private router:Router,private activatedRoute:ActivatedRoute,private dialog: MatDialog) {

   }

  ngOnInit(): void {
    this.isLoggedIn=this.login.isLoggedIn();
    this.user=this.login.getUser();
    this.login.loginStatusSubjec.asObservable().subscribe(
      data=>{
        this.isLoggedIn=this.login.isLoggedIn();
        this.user=this.login.getUser();
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
  public logout(){
    this.login.logout();
    window.location.reload();

  }
  isMenuOpen = false;
  isModalOpen = false;


  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
