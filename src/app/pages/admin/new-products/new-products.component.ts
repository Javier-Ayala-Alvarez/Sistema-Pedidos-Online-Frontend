import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { error } from 'console';
import { CategorysService } from 'src/app/services/categorys/categorys.service';
import { ProductsService } from 'src/app/services/products/products.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-products',
  templateUrl: './new-products.component.html',
  styleUrls: ['./new-products.component.css']
})
export class NewProductsComponent implements OnInit {

  categorys:any=[];

  product={
    nombre:'',
    descripcion:'',
    estado:true,
    precioVenta:'',
    ganancia:'',
    urlImagen:'',
    category:{
      id:''
    }
  }


  constructor(private categorysService:CategorysService,
    private snack:MatSnackBar, private productsService:ProductsService,
    private router:Router) { }

  ngOnInit(): void {
    this.categorysService.listarCategoryActivo().subscribe(
      (dato:any)=>{
        this.categorys=dato;
        console.log(this.categorys);
      },
      (error)=>{
        console.log(error);
        Swal.fire('Error !!','Error al cargar los datos','error');
      }
    )
  }

  agregarProduct(){
    if(this.product.nombre.trim()==''||
        this.product.descripcion.trim()==''||
        this.product.urlImagen.trim()==''){
          this.snack.open("Los datos son requeridos","",{
            duration:3000
          })
          return ;
    }
    console.log("sss",this.product);
  
    this.productsService.guardarProduct(this.product).subscribe(
      (data)=>{
        console.log("sssh",data);
        Swal.fire('Producto guardado','El producto ha sido guardado con éxito','success');
        this.product={
          nombre:'',
          descripcion:'',
          estado:true,
          precioVenta:'',
          ganancia:'',
          urlImagen:'',
          category:{
            id:''
          }
        }
        this.router.navigate(['/admin/list-product']);
      },
      (error)=>{
        Swal.fire('Error','Error al guardar el producto','error');
      }
    )
  }


}
