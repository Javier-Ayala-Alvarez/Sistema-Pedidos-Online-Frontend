import { Component, OnInit, Inject } from '@angular/core';

import { EntityProducts } from '../entity/entityProducts';
import { CusProductoService } from '../services/CusProducts/cus-producto.service';
import { CusCardsService } from '../services/cusCards/cus-cards.service';
import { EntityCarrito } from '../entity/entityCarrito';
import Swal from 'sweetalert2';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";



@Component({
  selector: 'app-cus-modal-producto',
  templateUrl: './cus-modal-producto.component.html',
  styleUrls: ['./cus-modal-producto.component.css']
})
export class CusModalProductoComponent implements OnInit {
  productsArray: EntityProducts[] = [];
  productsArrayIdCombo: EntityProducts[] = [];

  cards: EntityCarrito = new EntityCarrito();

  cantidad: number = 1;

  constructor(
    public dialogRef: MatDialogRef<CusModalProductoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {
      idCombo: any; id: string
},private products: CusProductoService
    ,private serviceCars : CusCardsService
  ) {}

  async ngOnInit(): Promise<void> {
    const id = this.data.id;
    const idCombo = this.data.idCombo;
    const idNumberCombo = parseInt(idCombo, 10);
    const idNumber = parseInt(id, 10);
    this.productsArray = this.products.getOneProducto(idNumber, idNumberCombo);
    this.productsArrayIdCombo = await this.products.getCombo(idNumberCombo);

  }


  closeModal(): void {
    this.dialogRef.close();
  }
  decrementarCantidad(): void{
    if (this.cantidad > 1) { // Verificamos que no se reduzca a un valor menor a 1
      this.cantidad--;
    }

  }
  incrementarCantidad(): void {
      this.cantidad++;

  }
  AddCards(): void{
    console.log("w");
    const productos = this.productsArray
    this.cards.id = 0;
    this.cards.idProducto = productos[0];
    this.cards.cantidad = this.cantidad;
    this.serviceCars.agregarElemento(this.cards);
    Swal.fire({
      icon: 'success',
      title: 'Bien!',
      text: 'Se agrego con exito!',
    }).then(r => r.isConfirmed);
        this.closeModal();
  }




}

