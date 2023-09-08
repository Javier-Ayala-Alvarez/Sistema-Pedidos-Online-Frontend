import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from '../helper';
import {Observable} from "rxjs";
import {ProductoInterface} from "../../interface/producto-interface";
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient:HttpClient) { }

  public guardarProduct(product:any){
    return this.httpClient.post(`${baserUrl}/api/product/new`,product);
  }

    public listarProductActivo():Observable<ProductoInterface[]>{
        return this.httpClient.get<ProductoInterface[]>(`${baserUrl}/api/product/list/DTO/activo`);
    }



  public listarProductPorId(id:any){
    return this.httpClient.get(`${baserUrl}/api/product/list/${id}`);
  }

  public listarProductPorPagina(page:number,size:number,order:string,asc:boolean){
    return this.httpClient.get(`${baserUrl}/api/product/list/pageables?page=${page}&size=${size}&order=${order}&asc=${asc}`);
  }

  public listarProductPorNombrePagina(search:string,page:number,size:number,asc:boolean){
    return this.httpClient.get(`${baserUrl}/api/product/list/search?product=${search}&size=${size}&asc=${asc}`);
  }

  public actualizarProduct(product:any,id:any){
    const jsonToSend = JSON.stringify(product);
    console.log('JSON que se enviará:', jsonToSend);
    console.log(`${baserUrl}/api/product/actualizar/${id}`);
    return this.httpClient.put(`${baserUrl}/api/product/actualizar/${id}`,product);
  }

  public eliminarProduct(id:any){
    return this.httpClient.delete(`${baserUrl}/api/product/delete/${id}`);
  }
}
