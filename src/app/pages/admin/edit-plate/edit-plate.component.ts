import {Component, OnInit} from '@angular/core';
import {ProductoInterface} from "../../../interface/producto-interface";
import {PromocionesService} from "../../../services/promociones/promociones.service";
import {CategorysService} from "../../../services/categorys/categorys.service";
import {ProductsService} from "../../../services/products/products.service";
import {PlatoService} from "../../../services/plato/plato.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {CategoriaInterface} from "../../../interface/categoria-interface";
import {PromocionInterface} from "../../../interface/promocion-interface";
import {Editarplato} from "../../../entity/Editarplato";
import Swal from "sweetalert2";
import {PlatoInterface} from "../../../interface/plato-interface";

@Component({
  selector: 'app-edit-plate',
  templateUrl: './edit-plate.component.html',
  styleUrls: ['./edit-plate.component.css']
})
export class EditPlateComponent implements OnInit {

  public categorias: CategoriaInterface[] | undefined;
  public productos: ProductoInterface[] | undefined;
  public productosSelecionados: any[] = [];
  public platoInterface: PlatoInterface | undefined;
  public plato: Editarplato = new Editarplato();
  id: number = 0;

  constructor(private promocionService: PromocionesService, private categoryService: CategorysService, private productService: ProductsService, private platoService: PlatoService, private router: Router, private snack: MatSnackBar, private route: ActivatedRoute) {
  }

  public agregarProducto(producto: ProductoInterface) {
    console.log(producto);
    this.plato.listaProductos?.push(producto.id);
    console.log(this.plato.listaProductos);
    this.productosSelecionados.push(producto);
  }

  public eliminarProducto(producto: ProductoInterface) {
    console.log(producto);
    this.plato.listaProductos?.splice(this.plato.listaProductos.indexOf(producto.id), 1);
    console.log(this.plato.listaProductos);
    this.productosSelecionados.splice(this.productosSelecionados.indexOf(producto), 1);
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getDataPlatoOfService();


    this.categoryService.listaCategotyDTOActivos().subscribe(
      (data: CategoriaInterface[]) => {
        this.categorias = data;
        console.log(this.categorias);
      },
      (error) => {
        console.log(error);
        Swal.fire('Error !!', 'Asegurese que existan registros de categorias en el sistema', 'info');
      }
    )

    this.productService.listarProductActivo().subscribe(
      (data: ProductoInterface[]) => {
        this.productos = data;
      },
      (error) => {
        console.log(error);
        Swal.fire('Error !!', 'Asegurese que existan registros de productos en el sistema', 'info');
      }
    )
  }

  private getDataPlatoOfService() {
    this.platoService.ObtenerPlatoPorId(this.id).subscribe(
      (data) => {
        this.platoInterface = data;
        this.transladarInformacion();

      },
      (error) => {
        console.log(error);
        Swal.fire('Error !!', 'Ocurrio un error con el registro seleccionado', 'error');
      }
    )
  }

  public transladarInformacion() {
    this.plato.id = this.platoInterface?.id;
    this.plato.nombre = this.platoInterface?.nombre;
    this.plato.descripcion = this.platoInterface?.descripcion;
    this.plato.urlImagen = this.platoInterface?.urlImagen;

    this.plato.idCategoria = this.platoInterface?.categoria.id;
    this.plato.precio = this.platoInterface?.precio;
    this.plato.estado = this.platoInterface?.estado;
    this.platoInterface?.productos?.map((producto) => {
      this.productosSelecionados.push(producto);
      this.plato.listaProductos?.push(producto.id);
    });

  }

  public editarPlato() {
    if (this.plato.nombre?.trim() == '' || this.plato.descripcion?.trim() == '' || this.plato.urlImagen?.trim() == '') {
      this.snack.open("Los datos son requeridos", "", {
        duration: 3000
      })
      return;
    }

    this.platoService.updatePlate(this.plato).subscribe(
      (data) => {
        console.log(data);
        Swal.fire('Producto guardado', 'El plato ha sido modificado con éxito', 'success');
        this.plato = new Editarplato();
        this.router.navigate(['/admin/list-plate']);
      },
      (error) => {
        Swal.fire('Error', 'Error al modificar el plato', 'error');
      }
    )


  }

}
