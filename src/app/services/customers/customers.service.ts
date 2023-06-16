import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from '../helper';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private httpClient:HttpClient) { }

  public listarCustomer(id:any){
    //let userId=this.getUser();
    //userId.id;
    return this.httpClient.get(`${baserUrl}/api/cliente/buscarPorId/${id}`);
  }


  public actualizarCustomer(id:any,cargar:any){
    return this.httpClient.put(`${baserUrl}/usuarios/ModificarUsuario/${id}`,cargar);
  }

  public darBaja(cargar2:any,cargar:any){
    return this.httpClient.put(`${baserUrl}/api/cliente/baja/${cargar2}`,cargar);
  }





  public getCurrentUser(){
    return this.httpClient.get(`${baserUrl}/actual-usuario`);
  }


  public setUserId(id:any){
    localStorage.setItem('user',JSON.stringify(id));
  }

  public getUser(){
    let userStr = localStorage.getItem('user');
    if(userStr != null){
      return JSON.parse(userStr);

    }else{
    }
  }

  public getUserId(){
    let userId=this.getUser();
    return userId.id;
  }

  public gerCustomerId(){

  }

}
