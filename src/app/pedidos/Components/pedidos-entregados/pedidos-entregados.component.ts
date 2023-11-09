import {Component, OnInit} from '@angular/core';
import {PedidosServiceService} from "../../Service/pedidos-service.service";
import {DetallePedido} from "../../Interfaces/detalle-pedido";
import {LoginService} from "../../../services/login/login.service";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {ModalDetallePedidoComponent} from "../Modals/modal-detalle-pedido/modal-detalle-pedido.component";
import {DetalleVenta} from "../../Interfaces/detalle-venta";
import {DatePipe} from "@angular/common";

@Component({
    selector: 'app-pedidos-entregados',
    templateUrl: './pedidos-entregados.component.html',
    styleUrls: ['./pedidos-entregados.component.css']
})
export class PedidosEntregadosComponent implements OnInit {

    public pedidos !: [DetallePedido];
    public idUsuario: number = 0;
    public idVenta: number = 0;

    constructor(private loginService: LoginService, private datePipe: DatePipe,
                private pedidoService: PedidosServiceService, public dialog: MatDialog) {
    }

    ngOnInit(): void {
        this.idUsuario = this.loginService.getUser().id;

        this.pedidoService.obtenerTodosLosPedidosPorIdUsuario(this.idUsuario).subscribe(
            (data: any) => {
                this.pedidos = data;
                console.log(this.pedidos);
            },
            (error) => {
                console.log(error);
            }
        )
    }

    openDialog(id: number): void {
        const dialogRef = this.dialog.open(ModalDetallePedidoComponent, {
            width: '800px',
            height: '380px',
            data: {
                id: id
            }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('La ventana modal fue cerrada');

        });

    }

    formatearFecha(fecha: string | Date): string {
        return <string>this.datePipe.transform(fecha, 'dd/MM/yyyy');
    }

}
