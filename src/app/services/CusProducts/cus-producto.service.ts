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
    cusProductoArrayCombo: EntityProducts[]=[ ];

    public dataLoaded: boolean = false;
    public dataLoaded1: boolean = false;

    constructor(private httpClient: HttpClient) {
  this. loadData();

    }
    getProduct(){
      return this.cusProductoArray;//Devuelve todo el arreglo
    }
  
    

    
    
    getOneProducto(_id: number): EntityProducts[] {
      return this.cusProductoArray.filter(x => x.idProducto == Number(_id));//Devuelve todo el arreglo que coicida con el id de la categoria
    }
    getCombo(_id: number): Promise<EntityProducts[]> {
      if (_id !== 0) {
        return new Promise((resolve, reject) => {
          this.loadDataCombo(_id)
            .then(() => {
              console.log(this.cusProductoArrayCombo);
              resolve(this.cusProductoArrayCombo);
            })
            .catch(error => {
              console.error("Error al obtener los datos del combo:", error);
              reject(error);
            });
        });
      } else {
        return Promise.resolve([]); // Resuelve una promesa con un arreglo vacío
      }
    }
    
    

    
    public loadData(): Promise<void> {
      return new Promise((resolve, reject) => {
        this.httpClient.get<EntityProducts[]>(`${baserUrl}/api/product/list`).subscribe(
          (data) => {
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
    public loadDataCombo(id: number ): Promise<void> {
      return new Promise((resolve1, reject1) => {
        this.httpClient.get<EntityProducts[]>(`${baserUrl}/api/product/listCombo/`+id).subscribe(
          (data) => {
           // console.log(JSON.stringify(data, null, 2)); // Imprime el array de objetos como JSON con indentación
              this.cusProductoArrayCombo = data;
            this.dataLoaded1 = true;
            resolve1();
          },
          (error) => {
            console.error(error);
            reject1(error);
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

