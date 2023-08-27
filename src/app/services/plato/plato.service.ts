import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import baseUrl from "../helper";
import baserUrl from "../helper";
import {Plato} from "../../entity/plato";

@Injectable({
  providedIn: 'root'
})
export class PlatoService {

  constructor(private httpClient:HttpClient) { }



  // public listarPlatoPorId(id:number){
  //   this.httpClient.get(`${baseUrl}/`).subscribe(
  //
  // }

    public savePlate(plate:Plato){
        return this.httpClient.post(`${baserUrl}/api/plato/new`,plate);
    }
}
