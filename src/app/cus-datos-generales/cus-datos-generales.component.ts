import { Component, OnInit, Inject } from '@angular/core';
import { CusCardsService } from '../services/cusCards/cus-cards.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EntityCarrito } from '../entity/entityCarrito';

@Component({
  selector: 'app-cus-datos-generales',
  templateUrl: './cus-datos-generales.component.html',
  styleUrls: ['./cus-datos-generales.component.css']
})
export class CusDatosGeneralesComponent implements OnInit {
  arrayCards: EntityCarrito[] = [];
  total: number = 0;
  newContact = {//Agregamos este objeto
    id:'' ,
    name:'',
    surname:'',
    phone:'',
    email:'',
    male:false,
    comment:''
  }
  constructor(
    public servicesCard: CusCardsService) { 

  }

  ngOnInit(): void {
    this.arrayCards = this.servicesCard.arryProductCars;
    this.calculateTotal();
  }
  calculateTotal(): void{
    this.total = this.arrayCards.reduce((sum, car) => sum + (car.cantidad * (car.idProducto?.precioVenta || 0)),0);
  }
  addContact(){

    this.newContact = {//Basiamos el objeto
      id: ' ',
      name:' ',
      surname:' ',
      phone:' ',
      email:' ',
      male:false,
      comment:''
    }
  }

}
