import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { error } from 'console';
import { CustomersService } from 'src/app/services/customers/customers.service';
import { LoginService } from 'src/app/services/login/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  customer:any=null;
  cargar:any={};
  cargar2:any;
  id=5;

  customerupdate={
    idCliente:3,
    nombre:'hola',
    apellido:'',
    estado:true,
    usuario:{
      idUsuario:14,
      username:'',
      email:'',
      password:'',
      estado:true
    }
  }


  constructor(private customersService:CustomersService,
    private router:Router, public login:LoginService) { }



  ngOnInit(): void {
    this.customer=this.customersService.getUser();
    this.cargar2=this.customersService.getUserId();

   this.customersService.listarCustomer(this.cargar2).subscribe(
    (data)=>{
      this.cargar=data;
      console.log(this.cargar);
    },
    (error)=>{
      console.log(error);
      Swal.fire('Error !!','','error');
    }

  )
  }

  public actualizarCustomer(){


    this.customersService.actualizarCustomer(this.cargar2,this.cargar).subscribe(
    (data)=>{
      Swal.fire('Usuario actualizado','Usuario actualizado con èxito','success').
      then((e)=>{
        this.router.navigate(['/customer-dashboard'])
      })
    },
    (error)=>{
      Swal.fire('Error en el sistema','No se ha podido actualizar el usuario','error');
      console.log(error);
    }
    )
  }



  public darBaja(){
    this.customersService.darBaja(this.cargar2,this.cargar).subscribe(
      (data)=>{
        Swal.fire('Usuario dado de Baja','Usuario a sido de baja con èxito','success').
        then((e)=>{
          this.logout();
        })
      },(error)=>{
        Swal.fire('Error en el sistema','No se ha podido dar de baja el usuario','error');
        console.log(error);
      }
    )
  }

  public logout(){
    this.login.logout();
    window.location.reload();
  }

}
