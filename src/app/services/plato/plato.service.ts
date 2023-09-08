import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import baseUrl from "../helper";
import baserUrl from "../helper";
import {Plato} from "../../entity/plato";
import {Observable} from "rxjs";
import {PlatoInterface} from "../../interface/plato-interface";

@Injectable({
  providedIn: 'root'
})
export class PlatoService {

  constructor(private httpClient:HttpClient) { }


    public listarPlatoPorPagina(page:number,size:number,order:string,asc:boolean){
        return this.httpClient.get(`${baserUrl}/api/platos/list/pageables?page=${page}&size=${size}&order=${order}&asc=${asc}`);
    }

  public ObtenerPlatoPorId(id:number):Observable<PlatoInterface>{
      return this.httpClient.get<PlatoInterface> (`${baserUrl}/api/platos/list/${id}`);
  }


    public savePlate(plate:Plato){
        return this.httpClient.post<PlatoInterface>(`${baserUrl}/api/platos/new`,plate );
    }
}
