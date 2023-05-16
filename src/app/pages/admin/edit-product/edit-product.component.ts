import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'console';
import { CategorysService } from 'src/app/services/categorys/categorys.service';
import { ProductsService } from 'src/app/services/products/products.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  id=0;
  product:any;
  categorys:any;

  constructor(private productsService:ProductsService,
              private router:Router,
              private route:ActivatedRoute,
              private categorysService:CategorysService
              ) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.productsService.listarProductPorId(this.id).subscribe(
      (data)=>{
        this.product=data;
        console.log(this.product);
      },
    (error)=>{
      console.log(this.product);
    }
    )
    this.categorysService.listarCategory().subscribe(
      (data:any)=>{
        this.categorys=data;
      },
      (error)=>{
        alert('Error al cargar las categorias');
      }
    )
  }

  public actualizarProduct(){
    this.productsService.actualizarProduct(this.product,this.id).subscribe(
      (data)=>{
        Swal.fire('Producto actualizado','El producto ha sido actualizado con èxito','success').
        then((e)=>{
          this.router.navigate(['/admin/list-product']);
        })
      },
      (error)=>{
        Swal.fire('Error en el sistema','No se ha podido actualizar el producto','error');
        console.log(error);
      }
    )
  }

}
