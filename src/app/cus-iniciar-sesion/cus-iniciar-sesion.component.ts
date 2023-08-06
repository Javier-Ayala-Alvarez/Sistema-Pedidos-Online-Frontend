import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CusCardsComponent } from '../cus-cards/cus-cards.component';
import { CusRegistrarseComponent } from '../cus-registrarse/cus-registrarse.component';

@Component({
  selector: 'app-cus-iniciar-sesion',
  templateUrl: './cus-iniciar-sesion.component.html',
  styleUrls: ['./cus-iniciar-sesion.component.css']
})
export class CusIniciarSesionComponent implements OnInit {
  newSesion = {//Agregamos este objeto
    usuario:'',
    contrasenia:'',
 
  }
  constructor( private router: Router, public dialogRef: MatDialogRef<CusIniciarSesionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { },
    private dialog: MatDialog
    ) { }

  ngOnInit(): void {
  }

  addContrasenia(){
    this.router.navigateByUrl('/DatosGenerales');
    this.closeModal();
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
}
