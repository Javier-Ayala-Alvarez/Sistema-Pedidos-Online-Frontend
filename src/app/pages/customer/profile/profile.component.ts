import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomersService } from 'src/app/services/customers/customers.service';
import Swal from 'sweetalert2';
import { error } from 'console';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  customer:any=null;
  cargar:any=[];
  cargar2:any=null;
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
      Swal.fire('Error !!','Error al cargar la empresa','error');
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

}
