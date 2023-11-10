import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {DetallePedido} from "../Interfaces/detalle-pedido";
import baseUrl from "../../services/helper";
import {Texto} from "../class/texto";
import {DetalleVenta} from "../Interfaces/detalle-venta";

@Injectable({
  providedIn: 'root'
})
export class PedidosServiceService {

  constructor(
      private httpClient:HttpClient
  ) { };

  public cambiarEstadoPedido(texto: Texto):Observable<any>{
    //patch method
    return this.httpClient.put<any>(`${baseUrl}/venta/cambiarEstado`, texto);
  }

  public AgregarComentario(texto: Texto):Observable<any>{
    //patch method
    return this.httpClient.put<any>(`${baseUrl}/venta/agregarComentario`, texto)
  }

  public obtenerPedidosPorIdUsuario(id:number): Observable<DetallePedido>{
    return this.httpClient.get<DetallePedido>(`${baseUrl}/venta/delivery/${id}`);
  }

  // obtener listado de pedidos por id de usuario
  public obtenerTodosLosPedidosPorIdUsuario(id:number): Observable<[DetallePedido]>{
    return this.httpClient.get<[DetallePedido]>(`${baseUrl}/venta/deliverys/${id}`);
  }

    // obtener listado de pedidos por id de usuario
  public obtenerTodosLosPedidosPorIdUsuarioEntregados(id:number): Observable<[DetalleVenta]>{
    return this.httpClient.get<[DetalleVenta]>(`${baseUrl}/venta/pedido/detalle/${id}`);
  }

    // obtener listado de pedidos por id de usuario

  public pedidosSucursal(id:number): Observable<[DetalleVenta]>{
    return this.httpClient.get<[DetalleVenta]>(`${baseUrl}/venta/pedido/detalle/${id}`);
  }



}
