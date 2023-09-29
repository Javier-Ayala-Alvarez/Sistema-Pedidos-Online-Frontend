import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'console';
import { BranchsOfficeService } from 'src/app/services/branchs-office/branchs-office.service';
import { EmployeesService } from 'src/app/services/employees/employees.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-employess',
  templateUrl: './edit-employess.component.html',
  styleUrls: ['./edit-employess.component.css']
})
export class EditEmployessComponent implements OnInit {

  id=0;
  employee:any;
  sucursal:any;

  constructor(private employeesService:EmployeesService,
              private branchOfficeService:BranchsOfficeService,
              private router:Router,
              private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.employeesService.listarEmployeePorId(this.id).subscribe(
      (data)=>{
        this.employee=data;
        console.log(this.employee);
      },
      (error)=>{
        console.log(this.employee);
      }
    )
    this.branchOfficeService.listarSucursal().subscribe(
      (data:any)=>{
        this.sucursal=data;
        console.log(this.sucursal);
      },
      (error)=>{
        Swal.fire('Error !!','Error al cargar las sucursales','error');
      }
    )
  }

  public actualizarEmployee(){
    this.employeesService.actualizarEmployee(this.employee,this.id).subscribe(
      (data)=>{
        Swal.fire('Empleado actualizado','El empleado ha sido actualizado con èxito','success').
        then((e)=>{
          this.router.navigate(['/admin/list-employee']);
        })
      },
      (error)=>{
        Swal.fire('Error en el sistema','No se ha podido actualizar el empleado','error');
        console.log(error);
      }
    )
  }

}
