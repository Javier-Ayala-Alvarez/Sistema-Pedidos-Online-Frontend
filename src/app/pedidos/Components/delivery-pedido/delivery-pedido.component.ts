import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {LoginService} from "../../../services/login/login.service";
import {PedidosServiceService} from "../../Service/pedidos-service.service";
import {DetallePedido} from "../../Interfaces/detalle-pedido";
import Swal from "sweetalert2";
import {EmployeesService} from "../../../services/employees/employees.service";
import {BranchsOfficeService} from "../../../services/branchs-office/branchs-office.service";
import {Router} from "@angular/router";
import {sucursalInterface} from "../../../interface/sucursalInterface";
import {DetalleVenta} from "../../Interfaces/detalle-venta";
import {MapDeliveryComponent} from "../map-delivery/map-delivery.component";

@Component({
    selector: 'app-delivery-pedido',
    templateUrl: './delivery-pedido.component.html',
    styleUrls: ['./delivery-pedido.component.css']
})
export class DeliveryPedidoComponent implements OnInit, AfterViewInit {
    @ViewChild(MapDeliveryComponent) mapDeliveryComponent!: MapDeliveryComponent;

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
    public detalleVenta: DetalleVenta[] = [];
    public sucursal: sucursalInterface | undefined;
    public estadoDelivery: boolean = false;
    public coordenadas: [number, number] | undefined;


    enviarComentario() {

        console.log(this.loginService.getUser());
        this.detalle?.ventasDetalleDTO?.forEach((detalle) => {
            console.log(detalle);
        });

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
                this.obtenerSucursal();
                this.obtenerPedido();


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
                this.detalleVenta = data.ventasDetalleDTO;
                this.idPedido = this.detalle.id;
                // coordenadas de entrega
                this.coordenadas = [this.detalle.longitud, this.detalle.altitud];
                console.log(this.coordenadas);
                this.mapDeliveryComponent.cargarMapa(this.coordenadas!, this.sucursal!);

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


    ngAfterViewInit(): void {



    }
}
