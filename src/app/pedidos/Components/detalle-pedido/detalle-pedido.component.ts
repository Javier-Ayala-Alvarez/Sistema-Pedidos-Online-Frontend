import { Component } from '@angular/core';
import {DetallePedido} from "../../Interfaces/detalle-pedido";

@Component({
  selector: 'app-detalle-pedido',
  templateUrl: './detalle-pedido.component.html',
  styleUrls: ['./detalle-pedido.component.css']
})

export class DetallePedidoComponent {

  // create example data
  data:DetallePedido[] = [];


}
