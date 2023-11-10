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
import {Texto} from "../../class/texto";

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
        let mensaje: string = "";

        // Si el comentario esta vacio no se envia
        if (!(this.comentario.trim() === '')) {
            // crear objeto texto
            let texto = new Texto(this.idPedido, this.comentario);
            this.pedidoService.AgregarComentario(texto).subscribe(
                (data) => {
                    console.log(data);
                    this.comentario = '';
                },
                (error) => {
                    console.log(error);
                    Swal.fire('Error al agregar comentario', 'Error al enviar el comentario', 'error');
                    return;
                }
            );
        }
        let texto = new Texto(this.idPedido, "e");
        this.pedidoService.cambiarEstadoPedido(texto).subscribe(
            (data) => {
                console.log(data);
                Swal.fire('Entregado', 'Operacioón exitosa', 'success');
                this.comentario = '';
            },
            (error) => {
                console.log(error);
                Swal.fire('Error ', 'Vuelva a intentarlo', 'error');
            }
        );
        // cambiar estado de empleado
        texto = new Texto(this.idUsuario, "DISPONIBLE");
        this.employeService.cambiarEstadoEmpleado(texto).subscribe(
            (data) => {
                console.log(data);
            },
            (error) => {
                console.log(error);
            }
        );

        // redireccionar a home
        this.router.navigate(['/delivery-dashboard/delivery-welcome']);

    }

    ngOnInit(): void {
        // get id session user
        this.idUsuario = this.loginService.getUser().id;

        // obtener estado de empleado por idusuario
        this.employeService.verificarPedidoAsignado(this.idUsuario).subscribe(
            (data) => {
                console.log(data);
                if (!data) {
                    Swal.fire('No tiene pedidos asignados', 'No tiene pedidos asignados', 'info');
                    this.router.navigate(['/delivery-dashboard/delivery-welcome']);
                    return;

                }
                this.estadoDelivery = data;
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
