import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { error } from 'console';
import { ProductsService } from 'src/app/services/products/products.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {


  page:number=0;
  size=10;
  order='id';
  asc=true;

  search='';

  product:any=[];
  totalPages:any=[];

  isFirst=false;
  isLast=false;

  constructor(private productSservice:ProductsService,
    private router:Router) { }

  ngOnInit(): void {
    this.productSservice.listarProductPorPagina(this.page,this.size,this.order,this.asc).subscribe(
      (dato:any)=>{
        this.product=dato;
        console.log("c",this.product)
        this.isFirst=dato.first;
        this.isLast=dato.last;
        this.totalPages=new Array(dato['totalPages']);
      },
      (error)=>{
        console.log(error);
        Swal.fire('Error !!','Error al cargar los productos','error');
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

  public listarProductPorNombrePagina(){
    if(this.search==''){
      this.ngOnInit();
    }else
    this.productSservice.listarProductPorNombrePagina(this.search,this.page,this.size,this.asc).subscribe(
      (dato:any)=>{
        this.product=dato.content;
        this.isFirst=dato.first;
        this.isLast=dato.last;
        this.totalPages=new Array(dato['totalPages']);
        console.log(this.product)
      },
      (error)=>{
        console.log(error);
        Swal.fire('Error !!','Error al realizar la busqueda','error');
      }
    )

  }

  public eliminarProduct(id:any){
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
        this.productSservice.eliminarProduct(id).subscribe(
          (data)=>{
            this.product=this.product.filter((product:any)=>this.product.id!=id);
            Swal.fire('ProductoInterface eliminada','El producto ha sido eliminado de la base de datos','success');
            this.ngOnInit();
          },
          (error)=>{
            Swal.fire('Error','Error al eliminar el producto','error');
          }
        )
      }
    })

  }

}
