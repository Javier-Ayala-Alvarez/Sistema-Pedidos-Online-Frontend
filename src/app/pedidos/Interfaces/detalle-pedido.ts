import {DetalleVenta} from "./detalle-venta";

export interface DetallePedido {


    id: number;
    nombreEncargado: string;
    correoEncargado: string;
    numeroTelefono: string;
    otrasIndicaciones: string;
    total: number;
    altitud: number;
    longitud: number;
    estado: string;
    fechaEntrega: string;
    ventasDetalleDTO: DetalleVenta[];

}
