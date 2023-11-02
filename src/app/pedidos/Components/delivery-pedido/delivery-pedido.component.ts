import {Component} from '@angular/core';

@Component({
  selector: 'app-delivery-pedido',
  templateUrl: './delivery-pedido.component.html',
  styleUrls: ['./delivery-pedido.component.css']
})
export class DeliveryPedidoComponent {

  constructor() {
  }
  comentario :string = '';

  enviarComentario(){
    console.log(this.comentario);
  }

}
