import { Component, OnInit } from '@angular/core';
import  Swal  from 'sweetalert2';
import { MatLegacySnackBar as MatSnackBar } from '@angular/material/legacy-snack-bar';
import { Router } from '@angular/router';
import { SignupService } from 'src/app/services/signup/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  customer={
    nombre:'',
    apellido:'',
    estado:true,
    usuario:{
      username:'',
      email:'',
      password:'',
    }
  }

  constructor(private signupService:SignupService,
    private scnack:MatSnackBar,
    private router:Router) { }

  ngOnInit(): void {
  }


  formSubmit(){
    if(this.customer.nombre.trim()==''||
      this.customer.apellido.trim()==''||
      this.customer.usuario.email.trim()==''||
      this.customer.usuario.username.trim()==''||
      this.customer.usuario.password.trim()==''
      ){
        this.scnack.open("los campos son requeridos","",{
          duration:3000
        })
        return;
      }
      this.signupService.guardarCustomer(this.customer).subscribe(
        (dato:any)=>{
          this.customer.nombre=''
          this.customer.apellido=''
          this.customer.usuario.email=''
          this.customer.usuario.username=''
          this.customer.usuario.password=''
          Swal.fire('Usuario creado','usuario creado con èxito','success');
          this.router.navigate(['/login']);
        }
      )


  }

}
