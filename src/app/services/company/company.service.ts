import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from '../helper';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private httpClient:HttpClient) { }


  id=1;
  public  listarCompanyId(id:any){
    return this.httpClient.get(`${baserUrl}/api/company/list/${id}`);
  }

  public actualizarCompany(id:any,company:any){
    return this.httpClient.put(`${baserUrl}/api/company/update/${id}`,company);

  }

}
