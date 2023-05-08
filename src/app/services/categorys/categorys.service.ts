import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from '../helper';

@Injectable({
  providedIn: 'root'
})
export class CategorysService {

  constructor(private httpClient:HttpClient) { }

  public agregarCategory(categoria:any){
    return this.httpClient.post(`${baserUrl}/api/category/new`,categoria);
  }

  public listarCategoryPorPagina(page:number,size:number,order:string,asc:boolean){
    return this.httpClient.get(`${baserUrl}/api/category/list/pageables?page=${page}&size=${size}&order=${order}&asc=${asc}`);
  }

  public listarCategoryPorNombrePagina(search:string,page:number,size:number,asc:boolean){
    return this.httpClient.get(`${baserUrl}/api/category/list/search?category=${search}&size=${size}&asc=${asc}`);
  }

  public eliminarCategory(id:any){
    return this.httpClient.delete(`${baserUrl}/api/category/delete/${id}`);
  }
}
