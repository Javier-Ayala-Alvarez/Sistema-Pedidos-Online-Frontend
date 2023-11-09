import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DetalleVenta} from "../../../Interfaces/detalle-venta";
import {PedidosServiceService} from "../../../Service/pedidos-service.service";

@Component({
    selector: 'app-modal-detalle-pedido',
    templateUrl: './modal-detalle-pedido.component.html',
    styleUrls: ['./modal-detalle-pedido.component.css']
})
export class ModalDetallePedidoComponent implements OnInit {
    constructor(private dialogRef: MatDialogRef<ModalDetallePedidoComponent>, @Inject(MAT_DIALOG_DATA) public detalle: any, public deliveryService: PedidosServiceService) {
        console.log(detalle);


    }
    public detallePedido!: DetalleVenta[];


    ngOnInit(): void {
        let idVenta = parseInt(this.detalle.id);
        console.log(idVenta);






        this.deliveryService.obtenerTodosLosPedidosPorIdUsuarioEntregados(idVenta).subscribe(
            (data: DetalleVenta[]) => {
               this.detallePedido = data;
                console.log(this.detalle);
            },
            (error) => {
                console.log(error);
            }
        );

    }

    onNoClick(): void {
        this.dialogRef.close();
    }


}
