import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../../services/login/login.service";
import {PedidosServiceService} from "../../Service/pedidos-service.service";
import {DetallePedido} from "../../Interfaces/detalle-pedido";
import Swal from "sweetalert2";
import {EmployeesService} from "../../../services/employees/employees.service";
import {BranchsOfficeService} from "../../../services/branchs-office/branchs-office.service";
import {Router} from "@angular/router";
import {sucursalInterface} from "../../../interface/sucursalInterface";

@Component({
    selector: 'app-delivery-pedido',
    templateUrl: './delivery-pedido.component.html',
    styleUrls: ['./delivery-pedido.component.css']
})
export class DeliveryPedidoComponent implements OnInit {
    constructor(private loginService: LoginService,
                private pedidoService: PedidosServiceService,
                private router: Router,
                private branchOfficeService: BranchsOfficeService,
                private employeService: EmployeesService) {
    }

    public comentario: string = '';
    public idPedido: number = 0;
    public idUsuario: number = 0;
    public detalle: DetallePedido | undefined;
    public sucursal: sucursalInterface | undefined;
    public estadoDelivery : boolean = false;


    enviarComentario() {

        console.log(this.loginService.getUser());

        // get session user

    }

    ngOnInit(): void {
        // get id session user
        this.idUsuario = this.loginService.getUser().id;

        // obtener estado de empleado por idusuario
        this.employeService.verificarPedidoAsignado(this.idUsuario).subscribe(
            (data) => {
                console.log(data);
                if (!data) {
                    // variable global
                    this.estadoDelivery = data;
                }
                this.obtenerPedido();
                this.obtenerSucursal();


            },
            (error) => {
                console.log(error);
                Swal.fire('Error !!', 'Error al cargar el pedido', 'error');
            }
        )


    }

    // obtener pedido por idusuario
    private obtenerPedido() {
        this.pedidoService.obtenerPedidosPorIdUsuario(this.idUsuario).subscribe(
            (data: DetallePedido) => {
                this.detalle = data;
                this.idPedido = this.detalle.id;
                console.log(this.detalle);
            },
            (error) => {
                console.log(error);
                Swal.fire('Error !!', 'Error al cargar el pedido', 'error');
            }
        )
    }

    private obtenerSucursal() {
        this.branchOfficeService.obtenerSucursalPorIdUsuario(this.idUsuario).subscribe(
            (data) => {
                console.log(data);
                this.sucursal = data;
            },
            (error) => {
                console.log(error);
            }
        )
    }

}
