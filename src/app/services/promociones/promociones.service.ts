import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PromocionInterface} from "../../interface/promocion-interface";
import baseUrl from "../helper";

@Injectable({
  providedIn: 'root'
})
export class PromocionesService {

  constructor(private httpClient:HttpClient) { }
  public  listarPromocionesActivas():Observable<PromocionInterface[]>{
    return this.httpClient.get<PromocionInterface[]>(`${baseUrl}/api/promocion/list/DTO/activo`);
  }
}
