import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { EmployeesService } from 'src/app/services/employees/employees.service';
import Swal from 'sweetalert2';
import { DateAdapter } from '@angular/material/core';
import { BranchsOfficeService } from 'src/app/services/branchs-office/branchs-office.service';
import { error } from 'console';

@Component({
  selector: 'app-new-employess',
  templateUrl: './new-employess.component.html',
  styleUrls: ['./new-employess.component.css']
})
export class NewEmployessComponent implements OnInit {

  sucursales:any=[];

  employee={
    nombre:'',
    apellido:'',
    dui:'',
    fechaNacimiento:'',
    salario:'',
    telefono:'',
    estado:true,
    sucursal:{
      id:''
    }
  }

  constructor(private employeesService:EmployeesService,
    private branchOfficeService:BranchsOfficeService,
    private scnack:MatSnackBar,
    private router:Router,) { }

  ngOnInit(): void {
    this.branchOfficeService.listarSucursalActivo().subscribe(
      (dato:any)=>{
        this.sucursales=dato;
        console.log(this.sucursales);
      },
      (error)=>{
        console.log(error);
        Swal.fire('Error !!','Error al cargar las sucursales','error');
      }
    )
  }

  guardarEmployee(){
    this.employeesService.guardarEmployee(this.employee).subscribe(
      (dato:any)=>{
        Swal.fire('Empleado agregada','El empleado ha sido agregado con èxito','success');
        this.router.navigate(['/admin/list-employee']);
      }
    )
  }

}
