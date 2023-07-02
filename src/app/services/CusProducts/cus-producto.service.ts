import { Injectable } from '@angular/core';
import { EntityProducts } from 'src/app/entity/entityProducts';

@Injectable({
  providedIn: 'root'
})
export class CusProductoService {
  cusProductoArray: EntityProducts[]=[
    { id: 1, name: 'Combo 1',description:'Categoría 1',price:2.00,idCategory:2,img:'https://th.bing.com/th/id/R.5fc09464dabd5f7e947256b195b0d698?rik=I0%2brEBQPprL6kA&pid=ImgRaw&r=0' },
    { id: 2, name: 'Combo 2',description:'Categoría 1',price:3.21,idCategory:1,img:'https://th.bing.com/th/id/R.5fc09464dabd5f7e947256b195b0d698?rik=I0%2brEBQPprL6kA&pid=ImgRaw&r=0' },
    { id: 3, name: 'Combo 3',description:'Categoría 1',price:4.00,idCategory:1,img:'https://th.bing.com/th/id/R.5fc09464dabd5f7e947256b195b0d698?rik=I0%2brEBQPprL6kA&pid=ImgRaw&r=0' },
    { id: 4, name: 'Combo 4',description:'Categoría 1',price:13.44,idCategory:3,img:'https://th.bing.com/th/id/R.5fc09464dabd5f7e947256b195b0d698?rik=I0%2brEBQPprL6kA&pid=ImgRaw&r=0' },
    { id: 5, name: 'Combo 5',description:'Categoría 1',price:23.33,idCategory:4,img:'https://th.bing.com/th/id/R.5fc09464dabd5f7e947256b195b0d698?rik=I0%2brEBQPprL6kA&pid=ImgRaw&r=0' },
    { id: 6, name: 'Combo 6',description:'Categoría 1',price:21.00,idCategory:4,img:'https://th.bing.com/th/id/R.5fc09464dabd5f7e947256b195b0d698?rik=I0%2brEBQPprL6kA&pid=ImgRaw&r=0' },
    { id: 7, name: 'Combo 7',description:'Categoría 1',price:2.22,idCategory:5,img:'https://th.bing.com/th/id/R.5fc09464dabd5f7e947256b195b0d698?rik=I0%2brEBQPprL6kA&pid=ImgRaw&r=0' },
    { id: 8, name: 'Combo 8',description:'Categoría 1',price:2.66,idCategory:6,img:'https://th.bing.com/th/id/R.5fc09464dabd5f7e947256b195b0d698?rik=I0%2brEBQPprL6kA&pid=ImgRaw&r=0' }
  
  ];
  constructor() { }
  getProduct(){
    return this.cusProductoArray;//Devuelve todo el arreglo
  }
  getOneCategory(_id: number): EntityProducts[] {
    return this.cusProductoArray.filter(x => x.idCategory === Number(_id));//Devuelve todo el arreglo que coicida con el id de la categoria
  }
}
