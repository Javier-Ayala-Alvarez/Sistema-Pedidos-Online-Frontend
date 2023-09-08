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

@Component({
    selector: 'app-new-plato',
    templateUrl: './new-plato.component.html',
    styleUrls: ['./new-plato.component.css']
})
export class NewPlatoComponent implements OnInit {

    public categorias: CategoriaInterface[] | undefined;
    public productos: ProductoInterface[] | undefined;
    public plato: Plato = new Plato();

    constructor(private categoryService: CategorysService, private productService: ProductsService, private platoService: PlatoService, private router: Router, private snack: MatSnackBar) {
    }

    ngOnInit(): void {
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


    }


    agregarPlato() {
        if (!this.validarCampos()) return;
    }

    validarCampos()
        :
        Boolean {


        return false;
    }
}
