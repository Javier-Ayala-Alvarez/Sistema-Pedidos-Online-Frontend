import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BranchsOfficeService } from 'src/app/services/branchs-office/branchs-office.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-branch-office',
  templateUrl: './list-branch-office.component.html',
  styleUrls: ['./list-branch-office.component.css']
})
export class ListBranchOfficeComponent implements OnInit {



  page:number=0;
  size=10;
  order='id';
  asc=true;

  search='';

  sucursal:any=[];
  totalPages:any=[];

  isFirst=false;
  isLast=false;




  constructor(private branchsOfficeService:BranchsOfficeService,
    private router:Router) { }

  ngOnInit(): void {
    this.branchsOfficeService.listarSucursalPorPagina(this.page,this.size,this.order,this.asc).subscribe(
      (dato:any)=>{
        this.sucursal=dato.content;
        this.isFirst=dato.first;
        this.isLast=dato.last;
        this.totalPages=new Array(dato['totalPages']);
      },
      (error)=>{
        console.log(error);
        Swal.fire('Error !!','Error al cargar las sucursales','error');
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

  public listarSucursalPorNombrePagina(){
    if(this.search==''){
      this.ngOnInit();
    }else
    this.branchsOfficeService.listarSucursalPorNombrePagina(this.search,this.page,this.size,this.asc).subscribe(
      (dato:any)=>{
        this.sucursal=dato.content;
        this.isFirst=dato.first;
        this.isLast=dato.last;
        this.totalPages=new Array(dato['totalPages']);
        console.log(this.sucursal);
      },
      (error)=>{
        console.log(error);
        Swal.fire('Error !!','Error al cargar los productos','error');
      }
    )

  }




  public eliminarSucursal(id:any){
    Swal.fire({
      title:'Eliminar producto',
      text:'¿Estás seguro , quieres eliminar este producto?',
      icon:'warning',
      showCancelButton:true,
      confirmButtonColor:'#3085d6',
      cancelButtonColor:'#d33',
      confirmButtonText:'Eliminar',
      cancelButtonText:'Cancelar'
    }).then((resultado)=>{
      if(resultado.isConfirmed){
        this.branchsOfficeService.eliminarSucursal(id).subscribe(
          (data)=>{
            this.sucursal=this.sucursal.filter((sucursal:any)=>this.sucursal.id!=id);
            Swal.fire('Sucursal eliminada','La Sucursal ha sido eliminada de la base de datos','success');
            this.ngOnInit();
          },
          (error)=>{
            Swal.fire('Error','Error al eliminar la Sucursal','error');
          }

        )
      }
    })
  }

}
