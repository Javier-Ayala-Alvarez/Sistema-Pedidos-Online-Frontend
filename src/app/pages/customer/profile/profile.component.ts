import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomersService } from 'src/app/services/customers/customers.service';

import { LoginService } from 'src/app/services/login/login.service';
import Swal from "sweetalert2";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  customer:any=null;
  cargar:any=[];
  cargar2:any;
  constructor(private customersService:CustomersService,
    private router:Router,private loginserVice:LoginService) { }

  ngOnInit(): void {
    this.customer=this.customersService.getUser();
    this.cargar2=this.customersService.getUserId();



   //this.cargar=this.customersService.listarCustomer();



   this.customersService.listarCustomer(this.cargar2).subscribe(
    (data)=>{
      this.cargar=data;
      console.log(this.cargar);
    },
    (error)=>{
      console.log(error);
      Swal.fire('Error !!','Error al cargar el empleado','error');
    }

  )



    //this.cargar =this.customersService.listarCustomer(this.cargar2);
    //his.customersService.getCurrentUser().subscribe((id:any))=>{
      //this.customersService.se
    //}
    //this.customersService.getUserId().subscribe(
     // (dato:any)=>{
      //  console.log(this.customer);
     // }
      //,
      //(error)=>{
       // console.log(error);
       // Swal.fire('Error !!','Error al cargar las categorías','error');
     // }
   // )
  }

  public darBaja(){
    Swal.fire({
      title:'Dar de baja',
      text:'¿Estás seguro , quiere dar de baja?',
      icon:'warning',
      showCancelButton:true,
      confirmButtonColor:'#3085d6',
      cancelButtonColor:'#d33',
      confirmButtonText:'Confirmar',
      cancelButtonText:'Cancelar'
    }).then((resultado)=>{
      if(resultado.isConfirmed){
        this.customersService.darBaja(this.cargar.idCliente,this.cargar).subscribe(
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
    })

  }

  public logout(){
    this.loginserVice.logout();
    window.location.reload();
  }


}
