import {Component, OnInit, Input} from '@angular/core';
import {DetalleVenta} from "../../Interfaces/detalle-venta";

@Component({
    selector: 'app-detalle-pedido',
    templateUrl: './detalle-pedido.component.html',
    styleUrls: ['./detalle-pedido.component.css']
})

export class DetallePedidoComponent implements OnInit{
    // constructor
    constructor() {
    }

    // create example data
    @Input() data: DetalleVenta[] | undefined;

    ngOnInit(): void {
    }


}
