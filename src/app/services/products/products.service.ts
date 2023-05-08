import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from '../helper';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient:HttpClient) { }

  public agregarProduct(){

  }

  public listarProductPorPagina(page:number,size:number,order:string,asc:boolean){
    return this.httpClient.get(`${baserUrl}/api/product/list/pageables?page=${page}&size=${size}&order=${order}&asc=${asc}`);
  }

  public listarProductPorNombrePagina(search:string,page:number,size:number,asc:boolean){
    return this.httpClient.get(`${baserUrl}/api/product/list/search?product=${search}&size=${size}&asc=${asc}`);
  }

  public eliminarProduct(id:any){
    return this.httpClient.delete(`${baserUrl}/api/product/delete/${id}`);
  }
}
