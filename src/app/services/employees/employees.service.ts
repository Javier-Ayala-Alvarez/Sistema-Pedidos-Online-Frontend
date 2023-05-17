import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from '../helper';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private httpClient:HttpClient) { }

  public guardarEmployee(employee:any){
    return this.httpClient.post(`${baserUrl}/api/empleados/new`,employee);
  }

  public  listarEmployeePorPagina(page:number,size:number,order:string,asc:boolean){
    return this.httpClient.get(`${baserUrl}/api/empleados/list/pageable?page=${page}&size=${size}&order=${order}&asc=${asc}`);
  }


  public eliminarEmployee(id:any){
    return this.httpClient.delete(`${baserUrl}/api/empleados/delete/${id}`);
  }
}
