import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EntityProducts } from 'src/app/entity/entityProducts';
import baserUrl from '../helper';

@Injectable({
  providedIn: 'root'
})
export class CusProductoService {
  static loadData() {
    throw new Error('Method not implemented.');
  }
  cusProductoArray: EntityProducts[]=[ ];
  public dataLoaded: boolean = false;
  constructor(private httpClient: HttpClient) {
this. loadData();
   }
  getProduct(){
    return this.cusProductoArray;//Devuelve todo el arreglo
  }
  getOneCategory(_id: number): EntityProducts[] {
    this.loadData();
    return this.cusProductoArray.filter((product) => product.category?.id == _id); 
   
  }
  
  
  
  
  getOneProducto(_id: number): EntityProducts[] {
    return this.cusProductoArray.filter(x => x.id == Number(_id));//Devuelve todo el arreglo que coicida con el id de la categoria
  }

  
  public loadData(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.httpClient.get<EntityProducts[]>(`${baserUrl}/api/product/list`).subscribe(
        (data) => {
          console.log(data); // Verifica que los datos estén llegando aquí correctamente
          this.cusProductoArray = data;
          this.dataLoaded = true;
          resolve();
        },
        (error) => {
          console.error(error);
          reject(error);
        }
      );
    });
  }
  
  
}
