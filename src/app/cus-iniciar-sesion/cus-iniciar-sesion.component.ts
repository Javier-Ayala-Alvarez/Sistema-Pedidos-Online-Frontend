import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CusCardsComponent } from '../cus-cards/cus-cards.component';
import { CusRegistrarseComponent } from '../cus-registrarse/cus-registrarse.component';
import { LoginService } from '../services/login/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cus-iniciar-sesion',
  templateUrl: './cus-iniciar-sesion.component.html',
  styleUrls: ['./cus-iniciar-sesion.component.css']
})
export class CusIniciarSesionComponent implements OnInit {
  newSesion = {//Agregamos este objeto
    username : '',
    password : '',
 
  }

  constructor( private snack:MatSnackBar, private loginService:LoginService,private router: Router, public dialogRef: MatDialogRef<CusIniciarSesionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { },
    private dialog: MatDialog
    ) { }

  ngOnInit(): void {
  }

  closeModal(): void {
    this.dialogRef.close();
  }
  

  registrar(){
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
  formSubmit(){
    if(this.newSesion.username.trim()==''|| this.newSesion.password.trim()==null){
      this.snack.open('El nombre de usuario es requerido ', 'Aceptar',{duration:3000})
      return;
    }
    if(this.newSesion.password.trim()==''||this.newSesion.password.trim()==null){
      this.snack.open('La contraseña es requerida ','Aceptar',{
        duration:3000
      })
      return;
    }
    console.log("1sss");
    this.loginService.generateToken(this.newSesion).subscribe(
      (data:any)=>{
        localStorage.setItem('accessToken', data.token)
        console.log("sss");
        console.log(data);
        this.loginService.loginUser(data.token);
        this.loginService.getCurrentUser().subscribe((user:any)=>{
          this.loginService.setUser(user);
          console.log(user);
          if(this.loginService.getUserRole()=='CLIENTE'){
            this.router.navigateByUrl('/customer-dashboard/DatosGenerales');
            this.loginService.loginStatusSubjec.next(true);
            this.closeModal();
          }else{
            this.loginService.logout();
          }
        })
        
      },(error: any)=>{
        console.log(error);
        this.snack.open('Detalles inválidos, vuelva a intentar ','Aceptar',{
          duration:3000
        })
      }
    )
  }
  loginData(loginData: any) {
    throw new Error('Method not implemented.');
  }
}
