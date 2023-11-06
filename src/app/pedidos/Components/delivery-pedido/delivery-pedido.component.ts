import {Component} from '@angular/core';
import {LoginService} from "../../../services/login/login.service";

@Component({
  selector: 'app-delivery-pedido',
  templateUrl: './delivery-pedido.component.html',
  styleUrls: ['./delivery-pedido.component.css']
})
export class DeliveryPedidoComponent {
  constructor(private loginService:LoginService) {
  }
  comentario :string = '';

  enviarComentario(){

    console.log(this.loginService.getUser());

    // get session user 

  }

}
