import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeesService } from 'src/app/services/employees/employees.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  page:number=0;
  size=10;
  order='id';
  asc=true;

  employee:any=[];
  totalPages:any=[];
  search='';

  isFirst=false;
  isLast=false;

  constructor(private employeesService:EmployeesService,
    private router:Router) { }

  ngOnInit(): void {
    this.employeesService.listarEmployeePorPagina(this.page,this.size,this.order,this.asc).subscribe(
      (dato:any)=>{
        console.log('datos de la consulta', dato);
        this.employee=dato.content;
        this.isFirst=dato.first;
        this.isLast=dato.last;
        this.totalPages=new Array(dato['totalPages']);
        console.log(this.employee);
      }
      ,
      (error)=>{
        console.log(error);
        Swal.fire('Error !!','Error al cargar los empleados','error');
      }
    )
  }

  paginaSiguiente():void{
    if(!this.isLast){
      this.page++;
      this.ngOnInit();
    }
  }
  paginaAnterior():void{
    if(!this.isFirst){
      this.page--;
      this.ngOnInit();
    }
  }

  public listarEmpleadosPorNombrePagina(){
    if(this.search==''){
      this.ngOnInit();
    }else
    this.employeesService.listarEmpleadosPorNombrePagina(this.search,this.page,this.size,this.asc).subscribe(
      (dato:any)=>{
        this.employee=dato.content;
        this.isFirst=dato.first;
        this.isLast=dato.last;
        this.totalPages=new Array(dato['totalPages']);
        console.log(this.employee);
      },
      (error)=>{
        console.log(error);
        Swal.fire('Error !!','Error al realizar la busqueda','error');
      }
    )
  }

  public eliminarEmployee(id:any){
    Swal.fire({
      title:'Eliminar categoria',
      text:'¿Estás seguro , quieres eliminar esta categoria?',
      icon:'warning',
      showCancelButton:true,
      confirmButtonColor:'#3085d6',
      cancelButtonColor:'#d33',
      confirmButtonText:'Eliminar',
      cancelButtonText:'Cancelar'
    }).then((resultado)=>{
      if(resultado.isConfirmed){
        this.employeesService.eliminarEmployee(id).subscribe(
          (data)=>{
            this.employee=this.employee.filter((employee:any)=>this.employee.id!=id);
            Swal.fire('Empleado eliminado','El empleado ha sido eliminado de la base de datos','success');
          this.ngOnInit();
          },
          (error)=> {
            Swal.fire('Error','Error al eliminar el empleado','error');
          }
        )
      }
    })
  }
  public darBajaEmployee(id:any){
    Swal.fire({
      title:'Dar de baja Empleado',
      text:'¿Estás seguro , quiere dar de baja este empleado?',
      icon:'warning',
      showCancelButton:true,
      confirmButtonColor:'#3085d6',
      cancelButtonColor:'#d33',
      confirmButtonText:'dar baja',
      cancelButtonText:'Cancelar'
    }).then((resultado)=>{
      if(resultado.isConfirmed){
        this.employeesService.darDeBajaEmployee(this.employee,id).subscribe(
          (data)=>{
            this.employee=this.employee.filter((employee:any)=>this.employee.id!=id);
            Swal.fire('Empleado dado de baja','El empleado ha sido dado de baja de la base de datos','success');
          this.ngOnInit();
          },
          (error)=> {
            Swal.fire('Error','Error al dar de baja el empleado','error');
          }
        )
      }
    })


  }

}
