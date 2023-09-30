import { Injectable } from '@angular/core';
import { CusCardsComponent } from 'src/app/cus-cards/cus-cards.component';

@Injectable({
  providedIn: 'root'
})
export class CusCardsService {
  public arryProductCars: any[]=[];
  private isOpen = false;
  private cusCardsComponent: CusCardsComponent | undefined;

  constructor() {}

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