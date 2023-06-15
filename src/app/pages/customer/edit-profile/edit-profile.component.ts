import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomersService } from 'src/app/services/customers/customers.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  customer:any=null;
  cargar:any=[];
  cargar2:any=null;



  constructor(private customersService:CustomersService,
    private router:Router) { }

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
      Swal.fire('Error !!','Error al cargar la empresa','error');
    }

  )
  }

  public actualizarCustomer(){
    this.customersService.actualizarCustomer(this.cargar).subscribe(
    (data)=>{
      Swal.fire('Usuario actualizado','Usuario actualizado con èxito','success').
      then((e)=>{
        this.router.navigate(['/customer-dashboard/profile'])
      })
    },
    (error)=>{
      Swal.fire('Error en el sistema','No se ha podido actualizar el usuario','error');
      console.log(error);
    }
    )
  }

}
