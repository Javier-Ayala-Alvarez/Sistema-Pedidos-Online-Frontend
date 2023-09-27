import { Component, OnInit } from '@angular/core';
import { SignupService } from '../services/signup/signup.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CusIniciarSesionComponent } from '../cus-iniciar-sesion/cus-iniciar-sesion.component';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-cus-registrarse',
  templateUrl: './cus-registrarse.component.html',
  styleUrls: ['./cus-registrarse.component.css']
})
export class CusRegistrarseComponent implements OnInit {

  customer = {
    nombre: '',
    apellido: '',
    estado: true,
    apodo: '',
    fechaNacimiento: '',
    usuario: {
      username: '',
      email: '',
      password: '',
      contraseniaConfirm: ''

    }

  }
  dialog: any;

  constructor(public dialogRef: MatDialogRef<CusRegistrarseComponent>, private signupService: SignupService,
    private scnack: MatSnackBar,
    private router: Router) { }

  ngOnInit(): void {
  }
  add() {
    if (this.customer.usuario.contraseniaConfirm != this.customer.usuario.password) {
      Swal.fire('Error', 'La contranseña no coicide', 'error');
      return;
    }
    if (this.customer.nombre.trim() == '' ||
      this.customer.apellido.trim() == '' ||
      this.customer.usuario.email.trim() == '' ||
      this.customer.usuario.username.trim() == '' ||
      this.customer.usuario.password.trim() == ''
    ) {
      this.scnack.open("los campos son requeridos", "", {
        duration: 3000
      })
      return;
    }
    this.signupService.guardarCustomer(this.customer).subscribe(
      (dato: any) => {
        this.customer.nombre = ''
        this.customer.apellido = ''
        this.customer.usuario.email = ''
        this.customer.usuario.username = ''
        this.customer.usuario.password = ''
        Swal.fire('Cliente creado', 'Cliente creado con èxito', 'success');
        this.closeModal();
        this.openDatosGenerales();
      },
      (error: any) => {
        // Captura y muestra el mensaje de error de la API al usuario
        if (error.error && error.error.message) {
          Swal.fire('Error', error.error.message, 'error');
        } else {
          Swal.fire('Error', error.error, 'error');
        }
      }
    )

  }

  openDatosGenerales() {
    const dialogRef = this.dialog.open(CusIniciarSesionComponent, {
      width: '500px', // Establece el ancho del diálogo modal según tus necesidades
      height: '450px',
      //data: {  id: id} /* Puedes pasar datos adicionales al diálogo modal si es necesario */
    });
    this.closeModal();
    dialogRef.afterClosed().subscribe((_result: any) => {
      // Aquí puedes manejar cualquier lógica que desees realizar después de que se cierra el diálogo modal
    });
  }

  closeModal(): void {
    this.dialogRef.close();
  }
}
