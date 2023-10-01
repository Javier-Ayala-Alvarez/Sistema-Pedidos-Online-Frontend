import { Component, OnInit, Inject } from '@angular/core';
import { CusCardsService } from '../services/cusCards/cus-cards.service';
import { EntityCarrito } from '../entity/entityCarrito';
import Swal from 'sweetalert2';

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


  cancelarContact(){
    Swal.fire({
      title:'Eliminar producto',
      text:'¿Estás seguro , quieres eliminar este el Pedido?',
      icon:'warning',
      showCancelButton:true,
      confirmButtonColor:'#3085d6',
      cancelButtonColor:'#d33',
      confirmButtonText:'Eliminar',
      cancelButtonText:'Cancelar'
    }).then((resultado)=>{
      if(resultado.isConfirmed){
        this.servicesCard.eliminarTodo();
        this.arrayCards = this.servicesCard.arryProductCars;
            Swal.fire('Producto eliminada','El pedido ha sido eliminado de la base de datos','success');
            this.ngOnInit();

      }
    })
  }

}
