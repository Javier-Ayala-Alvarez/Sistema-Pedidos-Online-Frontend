import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from '../helper';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ventaDetalle } from 'src/app/entity/ventaDetalle';
@Injectable({
  providedIn: 'root'
})
export class RealizarVentaService {

  constructor(private httpClient:HttpClient) { }

  public guardarVenta(venta:any){
    return this.httpClient.post(`${baserUrl}/venta/guardar`,venta);

  }
  
  guardarDetalle(ventaDetalle: ventaDetalle[]) {
    console.log("Detalle a enviar:", ventaDetalle);
    return this.httpClient.post(`${baserUrl}/ventaDetalle/guardar`, ventaDetalle).pipe(
      tap(response => {
        console.log("Respuesta del servidor:", response);
      })
    );
  }
  
}