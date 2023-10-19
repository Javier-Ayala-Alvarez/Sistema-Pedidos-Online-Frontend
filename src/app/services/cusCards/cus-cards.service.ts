import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CusCardsComponent } from 'src/app/cus-cards/cus-cards.component';
import baserUrl from '../helper';

@Injectable({
  providedIn: 'root'
})
export class CusCardsService {
  public arryProductCars: any[]=[];
  private isOpen = false;
  private cusCardsComponent: CusCardsComponent | undefined;

  constructor(private httpClient:HttpClient) {}
  public listarHora(){
  
      return this.httpClient.get(`${baserUrl}/api/Evento/list`);
    
  }
  registerComponent(cusCardsComponent: CusCardsComponent) {
    this.cusCardsComponent = cusCardsComponent;
  }
  agregarElemento(elemento: any) {
    this.arryProductCars.push(elemento);
    console.log("Hola",elemento);
  }
  eliminarElemento(elemento: any) {
    const index = this.arryProductCars.indexOf(elemento);
    if (index !== -1) {
      this.arryProductCars.splice(index, 1);
    }
  }
  eliminarTodo() {
    
      this.arryProductCars =[];
    
  }

}