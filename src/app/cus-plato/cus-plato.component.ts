import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { CusProductoService } from '../services/CusProducts/cus-producto.service';
import { ActivatedRoute } from '@angular/router';
import { EntityProducts } from '../entity/entityProducts';
import { CusModalProductoComponent } from '../cus-modal-producto/cus-modal-producto.component';
import {MatDialog} from "@angular/material/dialog";
import { LoadingSpinnerComponent } from '../components/loading-spinner/loading-spinner.component';

@Component({
  selector: 'app-cus-plato',
  templateUrl: './cus-plato.component.html',
  styleUrls: ['./cus-plato.component.css']
})
export class CusPlatoComponent implements OnInit {
  @Output() idSelect = new EventEmitter(); // Decorador para enviar el id
  productsArray: { [key: string]: EntityProducts[] } = {};
  
  loading = false;
  @ViewChild(LoadingSpinnerComponent) spinner: LoadingSpinnerComponent | undefined;

  constructor(
    private products: CusProductoService,
    private activatedRoute: ActivatedRoute,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loading = true; // Activar el spinner
    // Cargar los datos antes de suscribirte al ActivatedRoute
    this.products.loadData().then(() => {
      this.activatedRoute.params.subscribe((params) => {
        const id = params['id'];
        // Utiliza el ID como necesites, por ejemplo:
        this.productsArray = this.products.getOneCategory(id);
        this.loading = false; // Desactivar el spinner cuando los datos estén cargados

      });
    });
  }

  openModal(id: number, idCombo: number) {
    const dialogRef = this.dialog.open(CusModalProductoComponent, {
      width: '800px',
      height: '380px',
      data: { id: id, idCombo : idCombo }
    });

    dialogRef.afterClosed().subscribe((result) => {
      // Aquí puedes manejar cualquier lógica que desees realizar después de que se cierra el diálogo modal
    });
  }

}
