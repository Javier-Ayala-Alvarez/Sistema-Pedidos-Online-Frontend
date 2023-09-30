import { Component, OnInit, Inject } from '@angular/core';
import { CusCardsService } from '../services/cusCards/cus-cards.service';

import { EntityCarrito } from '../entity/entityCarrito';
import Swal from 'sweetalert2';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {CusIniciarSesionComponent} from "../cus-iniciar-sesion/cus-iniciar-sesion.component";


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

    public servicesCard: CusCardsService,
    private router: Router,
    private dialog: MatDialog

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

  openDatosGenerales() {

    // Verifica si el usuario está autenticado


    if (this.isLoggedIn()) {
      
      this.router.navigateByUrl('/customer-dashboard/DatosGenerales');
      this.closeModal();
    } else {
      const dialogRef = this.dialog.open(CusIniciarSesionComponent, {
        width: '500px', // Establece el ancho del diálogo modal según tus necesidades
        height: '450px',
        //    data: {  id: id} /* Puedes pasar datos adicionales al diálogo modal si es necesario */
      });
      this.closeModal();
      dialogRef.afterClosed().subscribe(result => {
        // Aquí puedes manejar cualquier lógica que desees realizar después de que se cierra el diálogo modal
      });
    }

    

  }
  isLoggedIn(): boolean {
    return !!localStorage.getItem('accessToken');
  }
}