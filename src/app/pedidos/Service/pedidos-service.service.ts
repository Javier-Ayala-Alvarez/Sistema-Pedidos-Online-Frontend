import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {DetallePedido} from "../Interfaces/detalle-pedido";
import baseUrl from "../../services/helper";

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

  public cambiarEstadoPedido(id:number,estado:string):Observable<any>{
    //patch method
    return this.httpClient.patch<any>(`${baseUrl}/venta/delivery/${id}/${estado}`,null);
  }

}
