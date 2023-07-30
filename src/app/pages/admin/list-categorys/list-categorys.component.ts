import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { error } from 'console';
import { CategorysService } from 'src/app/services/categorys/categorys.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-categorys',
  templateUrl: './list-categorys.component.html',
  styleUrls: ['./list-categorys.component.css']
})
export class ListCategorysComponent implements OnInit {

  page:number=0;
  size=10;
  order='id';
  asc=true;

  search='';

  category:any=[];
  totalPages:any=[];

  isFirst=false;
  isLast=false;
  constructor(private categorysService:CategorysService,
    private router:Router) { }

  ngOnInit(): void {
    this.categorysService.listarCategoryPorPagina(this.page,this.size,this.order,this.asc).subscribe(
      (dato:any)=>{
        this.category=dato.content;
        this.isFirst=dato.first;
        this.isLast=dato.last;
        this.totalPages=new Array(dato['totalPages']);
        console.log(this.category);
      },
      (error)=>{
        console.log(error);
        Swal.fire('Error !!','Error al cargar las categorías','error');
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
  public listarCategoryPorNombrePagina(){
    if(this.search==''){
      this.ngOnInit();
    }else
    this.categorysService.listarCategoryPorNombrePagina(this.search,this.page,this.size,this.asc).subscribe(
      (dato:any)=>{
        this.category=dato.content;
        this.isFirst=dato.first;
        this.isLast=dato.last;
        this.totalPages=new Array(dato['totalPages']);
        console.log(this.category);
      },
      (error)=>{
        console.log(error);
        Swal.fire('Error !!','Error al realizar la busqueda','error');
      }
    )



  }


  public eliminarCategory(id:any){
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
        this.categorysService.eliminarCategory(id).subscribe(
        (data)=>{
          this.category=this.category.filter((category:any)=> this.category.id!=id);
          Swal.fire('Categoria eliminada','La categoria ha sido eliminada de la base de datos','success');
          this.ngOnInit();
        },
        (error)=> {
          Swal.fire('Error','Error al eliminar la categoria','error');
        }
        )
      }
    })
  }

}
