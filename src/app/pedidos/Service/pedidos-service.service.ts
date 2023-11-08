import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {DetallePedido} from "../Interfaces/detalle-pedido";
import baseUrl from "../../services/helper";
import {Texto} from "../class/texto";

@Injectable({
  providedIn: 'root'
})
export class PedidosServiceService {

  constructor(
      private httpClient:HttpClient
  ) { };

  public obtenerPedidosPorIdUsuario(id:number): Observable<DetallePedido>{
    return this.httpClient.get<DetallePedido>(`${baseUrl}/venta/delivery/${id}`);
  }

  public cambiarEstadoPedido(texto: Texto):Observable<any>{
    //patch method
    return this.httpClient.put<any>(`${baseUrl}/venta/cambiarEstado`, texto);
  }

  public AgregarComentario(texto: Texto):Observable<any>{
    //patch method
    return this.httpClient.put<any>(`${baseUrl}/venta/agregarComentario`, texto)
  }

}
