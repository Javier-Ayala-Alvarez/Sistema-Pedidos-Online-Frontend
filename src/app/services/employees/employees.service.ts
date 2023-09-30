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

  public listarEmployeePorId(id:any){
    return this.httpClient.get(`${baserUrl}/api/empleados/list/${id}`);

  }
  public  listarEmployeePorPagina(page:number,size:number,order:string,asc:boolean){
    return this.httpClient.get(`${baserUrl}/api/empleados/list/pageable?page=${page}&size=${size}&order=${order}&asc=${asc}`);
  }

  public listarEmpleadosPorNombrePagina(search:string,page:number,size:number,asc:boolean){
    return this.httpClient.get(`${baserUrl}/api/empleados/list/search?empleado=${search}&size=${size}&asc=${asc}`);
  }
  public actualizarEmployee(employee:any,id:any){
    return this.httpClient.put(`${baserUrl}/api/empleados/update2/${id}`,employee);
  }

  public darDeBajaEmployee(employee:any,id:any){
    return this.httpClient.put(`${baserUrl}/api/empleados/baja/${id}`,employee);
  }

  public eliminarEmployee(id:any){
    return this.httpClient.delete(`${baserUrl}/api/empleados/delete/${id}`);
  }
}
