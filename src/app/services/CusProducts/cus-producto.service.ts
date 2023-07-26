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
 
  
  
  
  
  getOneProducto(_id: number): EntityProducts[] {
    return this.cusProductoArray.filter(x => x.idProducto == Number(_id));//Devuelve todo el arreglo que coicida con el id de la categoria
  }

  
  public loadData(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.httpClient.get<EntityProducts[]>(`${baserUrl}/api/product/list`).subscribe(
        (data) => {
          //console.log(JSON.stringify(data, null, 2)); // Imprime el array de objetos como JSON con indentación
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
  


    // Función para obtener los productos agrupados por idProducto, idCombo y filtrados por idCategoria
    getOneCategory(id: number): { [key: string]: EntityProducts[] } {
      this.loadData();
  
      const productosAgrupados: { [key: string]: EntityProducts[] } = {};
  
      for (const producto of this.cusProductoArray) {
        const key = `${producto.idProducto}-${producto.idCombo}`;
        
        // Agregar solo si coincide con la categoría deseada (idCategoria)
        if (!productosAgrupados[key] && producto.category == id) {
          productosAgrupados[key] = [producto]; // Agregar solo un producto en la combinación
        }
      }
      console.log(productosAgrupados);
      return productosAgrupados;
    }
  }

