import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from '../helper';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private httpClient:HttpClient) { }

  public guardarCustomer(customer:any){
    return this.httpClient.post(`${baserUrl}/usuarios/GuardarUsuarioCliente`,customer);

  }
}
