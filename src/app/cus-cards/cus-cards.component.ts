import { Component, OnInit, Inject } from '@angular/core';
import { CusCardsService } from '../services/cusCards/cus-cards.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EntityCarrito } from '../entity/entityCarrito';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cus-cards',
  templateUrl: './cus-cards.component.html',
  styleUrls: ['./cus-cards.component.css']
})
export class CusCardsComponent implements OnInit {
  arrayCards: EntityCarrito[] = [];
  total: number = 0;
  constructor(
    public dialogRef: MatDialogRef<CusCardsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { },
    public servicesCard: CusCardsService
  
  ) { }

  ngOnInit(): void {
    this.arrayCards = this.servicesCard.arryProductCars;
    this.calculateTotal();
  }

  closeModal(): void {
    this.dialogRef.close();
  }
  calculateTotal(): void{
    this.total = this.arrayCards.reduce((sum, car) => sum + (car.cantidad * (car.idProducto?.precioVenta || 0)),0);
  }
  eliminarElemento(car: EntityCarrito): void {
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¿Quieres eliminar este elemento del carrito?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        const index = this.arrayCards.indexOf(car);
        if (index !== -1) {
          this.arrayCards.splice(index, 1);
          this.calculateTotal();
        }
      }
    });
  }
}


 




