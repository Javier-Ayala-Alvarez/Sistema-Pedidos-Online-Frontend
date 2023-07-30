import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EntityProducts } from '../entity/entityProducts';
import { CusProductoService } from '../services/CusProducts/cus-producto.service';
import { CusCardsService } from '../services/cusCards/cus-cards.service';
import { EntityCarrito } from '../entity/entityCarrito';
import Swal from 'sweetalert2';
import { log } from 'console';


@Component({
  selector: 'app-cus-modal-producto',
  templateUrl: './cus-modal-producto.component.html',
  styleUrls: ['./cus-modal-producto.component.css']
})
export class CusModalProductoComponent implements OnInit {
  productsArray: EntityProducts[] = [];
  productsArrayIdCombo: EntityProducts[] = [];

  cards: EntityCarrito = new EntityCarrito();
  mostrarDetalle = false; // Agregar propiedad para controlar la visibilidad de la tabla de productos relacionados
  cantidad: number = 1;

  constructor(
    public dialogRef: MatDialogRef<CusModalProductoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { id: string },private products: CusProductoService
    ,private serviceCars : CusCardsService
  ) {}
  agregarElementoAlArray(elemento: any) {
   // this.serviceCars.agregarElemento(elemento);
  }
  async ngOnInit(): Promise<void> {
    const id = this.data.id;
    const idNumber = parseInt(id, 10);
    this.productsArray = this.products.getOneProducto(idNumber);
    this.productsArrayIdCombo = await this.products.getCombo(this.productsArray[0].idCombo);

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
    });
        this.closeModal();
  }

 
  

}

