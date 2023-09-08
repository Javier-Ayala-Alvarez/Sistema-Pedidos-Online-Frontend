import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from '../helper';
import {Observable} from "rxjs";
import {CategoriaInterface} from "../../interface/categoria-interface";

@Injectable({
  providedIn: 'root'
})
export class CategorysService {

  constructor(private httpClient:HttpClient) { }

  public guardarCategory(category:any){
    return this.httpClient.post(`${baserUrl}/api/category/new`,category);
  }

  public listaCategotyDTOActivos():Observable<CategoriaInterface[]>{
    return this.httpClient.get<CategoriaInterface[]>(`${baserUrl}/api/category/list/DTO/activo`);
  }

  public listarCategoryActivo(){
    return this.httpClient.get(`${baserUrl}/api/category/list/activo`);
  }

  public listarCategory(){
    return this.httpClient.get(`${baserUrl}/api/category/list`);
  }

  public listarCategoryPorId(id:any){
    return this.httpClient.get(`${baserUrl}/api/category/list/${id}`);
  }

  public listarCategoryPorPagina(page:number,size:number,order:string,asc:boolean){
    return this.httpClient.get(`${baserUrl}/api/category/list/pageables?page=${page}&size=${size}&order=${order}&asc=${asc}`);
  }

  public listarCategoryPorNombrePagina(search:string,page:number,size:number,asc:boolean){
    return this.httpClient.get(`${baserUrl}/api/category/list/search?category=${search}&size=${size}&asc=${asc}`);
  }

  public actualizarCategory(category:any,id:any){
    return this.httpClient.put(`${baserUrl}/api/category/actualizar/${id}`,category);

  }

  public eliminarCategory(id:any){
    return this.httpClient.delete(`${baserUrl}/api/category/delete/${id}`);
  }
}
