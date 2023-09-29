import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { EmployeesService } from 'src/app/services/employees/employees.service';
import Swal from 'sweetalert2';
import { DateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-new-employess',
  templateUrl: './new-employess.component.html',
  styleUrls: ['./new-employess.component.css']
})
export class NewEmployessComponent implements OnInit {


  employee={
    nombre:'',
    apellido:'',
    dui:'',
    fechaNacimiento:'',
    telefono:'',
  }

  constructor(private employeesService:EmployeesService,private scnack:MatSnackBar,
    private router:Router,) { }

  ngOnInit(): void {
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
