import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from '../helper';
import {Observable} from "rxjs";
import {sucursalInterface} from "../../interface/sucursalInterface";

@Injectable({
  providedIn: 'root'
})
export class BranchsOfficeService {

  constructor(private httpClient: HttpClient) {
  }


  public guardarSucursal(branchOffice: any) {
    return this.httpClient.post(`${baserUrl}/api/sucursal/new`, branchOffice);
  }

  public listarSucursalPorId(id: any) {
    return this.httpClient.get(`${baserUrl}/api/sucursal/list/${id}`);
  }

  public listarSucursalPorPagina(page: number, size: number, order: string, asc: boolean) {
    return this.httpClient.get(`${baserUrl}/api/sucursal/list/pageables?page=${page}&size=${size}&order=${order}&asc=${asc}`);
  }

  public listarSucursalPorNombrePagina(search: string, page: number, size: number, asc: boolean) {
    return this.httpClient.get(`${baserUrl}/api/sucursal/list/search?sucursal=${search}&size=${size}&asc=${asc}`);
  }

  public listarSucursalActivo() {
    return this.httpClient.get(`${baserUrl}/api/sucursal/list/activo`);
  }

  public listarSucursalActivoConInterfaz():Observable<[sucursalInterface]> {
    return this.httpClient.get<[sucursalInterface]>(`${baserUrl}/api/sucursal/list/activo`);

  }

  public listarSucursal(){
    return this.httpClient.get(`${baserUrl}/api/sucursal/list`);
  }

  public actualizarSucursal(branchOffice:any,id:any){
    return this.httpClient.put(`${baserUrl}/api/sucursal/actualizar/${id}`,branchOffice);
  }


  public eliminarSucursal(id:any){
    return this.httpClient.delete(`${baserUrl}/api/sucursal/delete/${id}`);

  }

  // obtener sucursal por idusuario
    public obtenerSucursalPorIdUsuario(id:number):Observable<sucursalInterface>{
        return this.httpClient.get<sucursalInterface>(`${baserUrl}/api/sucursal/usuario/id/${id}`);
    }



}
