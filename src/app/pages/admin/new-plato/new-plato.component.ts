import {Component, OnInit} from '@angular/core';
import {CategorysService} from "../../../services/categorys/categorys.service";
import {ProductsService} from "../../../services/products/products.service";
import {PlatoService} from "../../../services/plato/plato.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {CategoriaInterface} from "../../../interface/categoria-interface";
import {Plato} from "../../../entity/plato";
import Swal from "sweetalert2";
import {ProductoInterface} from "../../../interface/producto-interface";
import {PromocionesService} from "../../../services/promociones/promociones.service";
import {PromocionInterface} from "../../../interface/promocion-interface";
import {Editarplato} from "../../../entity/Editarplato";

@Component({
    selector: 'app-new-plato',
    templateUrl: './new-plato.component.html',
    styleUrls: ['./new-plato.component.css']
})
export class NewPlatoComponent implements OnInit {

    public categorias: CategoriaInterface[] | undefined;
    public productos: ProductoInterface[] | undefined;
    public productosSelecionados: any[] = [];

    public plato: Editarplato = new Editarplato();

    constructor(private promocionService: PromocionesService, private categoryService: CategorysService, private productService: ProductsService, private platoService: PlatoService, private router: Router, private snack: MatSnackBar) {
    }

    ngOnInit(): void {
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
                console.log(this.productos);
            },
            (error) => {
                console.log(error);
                Swal.fire('Error !!', 'Asegurese que existan registros de productos en el sistema', 'info');
            }
        )





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


    agregarPlato() {
        if (this.plato.nombre?.trim() == '' || this.plato.descripcion?.trim() == '' || this.plato.urlImagen?.trim() == '' ) {
            this.snack.open("Los datos son requeridos", "", {
                duration: 3000
            })
            return ;
        }

        this.platoService.savePlate(this.plato).subscribe(
            (data) => {
                console.log(data);
                Swal.fire('Plato guardado', 'El plato ha sido guardado con éxito', 'success');
                this.plato = new Editarplato();
                this.router.navigate(['/admin/list-plate']);
            },
            (error) => {
                Swal.fire('Error', 'Error al guardar el plato', 'error');
            }
        )
    }

    validarCampos(): Boolean {
        if (this.plato.nombre?.trim() == '' || this.plato.descripcion?.trim() == '' || this.plato.urlImagen?.trim() == '' ) {
            this.snack.open("Los datos son requeridos", "", {
                duration: 3000
            })
            return true;
        }
        return false;
    }
}
