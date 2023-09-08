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
import {Plato} from "../../../entity/plato";
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
    public promociones: PromocionInterface[] | undefined;
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
        console.log(this.platoInterface);
        this.transladarInformacion();

        this.categoryService.listaCategotyDTOActivos().subscribe(
            (data: CategoriaInterface[]) => {
                this.categorias = data;
                console.log(this.categorias);
            },
            (error) => {
                console.log(error);
                Swal.fire('Error !!', 'Error al cargar los datos', 'error');
            }
        )

        this.productService.listarProductActivo().subscribe(
            (data: ProductoInterface[]) => {
                this.productos = data;
                console.log(this.productos);
            },
            (error) => {
                console.log(error);
                Swal.fire('Error !!', 'Error al cargar los datos', 'error');
            }
        )


        this.promocionService.listarPromocionesActivas().subscribe(
            (data: PromocionInterface[]) => {
                this.promociones = data;
                console.log(this.promociones);
            },
            (error) => {
                console.log(error);
                Swal.fire('Error !!', 'Error al cargar los datos', 'error');
            }
        )


    }

    private getDataPlatoOfService() {
        this.platoService.ObtenerPlatoPorId(this.id).subscribe(
            (data) => {
                this.platoInterface = data;
                console.log(data);
            },
            (error) => {
                console.log(error);
                Swal.fire('Error !!', 'Error al cargar los datos', 'error');
            }
        )
    }

    public transladarInformacion() {
        this.plato.id = this.platoInterface?.id;
        this.plato.nombre = this.platoInterface?.nombre;
        this.plato.descripcion = this.platoInterface?.descripcion;
        this.plato.urlImagen = this.platoInterface?.urlImagen;

        this.plato.idCategoria = this.platoInterface?.categoria.id;
        this.plato.idPromocion = this.platoInterface?.promocion.id
        this.plato.precio = this.platoInterface?.precio;
        this.plato.estado = this.platoInterface?.estado;
        this.platoInterface?.productos?.map((producto) => {
            this.productosSelecionados.push(producto);
            this.plato.listaProductos?.push(producto.id);
        });

    }
    public editarPlato() {

    }

}
