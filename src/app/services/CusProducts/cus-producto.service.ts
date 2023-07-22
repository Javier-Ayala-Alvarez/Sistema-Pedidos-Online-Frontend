import { Injectable } from '@angular/core';
import { EntityProducts } from 'src/app/entity/entityProducts';

@Injectable({
  providedIn: 'root'
})
export class CusProductoService {
  cusProductoArray: EntityProducts[]=[
    { id: 1, name: 'Combo 1',description:'« Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. »1',price:2.00,idCategory:2,img:'https://th.bing.com/th/id/R.5fc09464dabd5f7e947256b195b0d698?rik=I0%2brEBQPprL6kA&pid=ImgRaw&r=0' , idCombo:0 },
    { id: 2, name: 'Combo 2',description:'« Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. »1',price:3.21,idCategory:1,img:'https://th.bing.com/th/id/R.5fc09464dabd5f7e947256b195b0d698?rik=I0%2brEBQPprL6kA&pid=ImgRaw&r=0' , idCombo:0 },
    { id: 3, name: 'Combo 3',description:'« Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. »1',price:4.00,idCategory:1,img:'https://th.bing.com/th/id/R.5fc09464dabd5f7e947256b195b0d698?rik=I0%2brEBQPprL6kA&pid=ImgRaw&r=0' , idCombo:0 },
    { id: 4, name: 'Combo 4',description:'1',price:13.44,idCategory:3,img:'https://th.bing.com/th/id/R.5fc09464dabd5f7e947256b195b0d698?rik=I0%2brEBQPprL6kA&pid=ImgRaw&r=0', idCombo:0  },
    { id: 5, name: 'Combo 5',description:'1',price:23.33,idCategory:4,img:'https://th.bing.com/th/id/R.5fc09464dabd5f7e947256b195b0d698?rik=I0%2brEBQPprL6kA&pid=ImgRaw&r=0', idCombo:0  },
    { id: 6, name: 'Combo 6',description:'1',price:21.00,idCategory:4,img:'https://th.bing.com/th/id/R.5fc09464dabd5f7e947256b195b0d698?rik=I0%2brEBQPprL6kA&pid=ImgRaw&r=0', idCombo:0  },
    { id: 7, name: 'Combo 7',description:'1',price:2.22,idCategory:5,img:'https://th.bing.com/th/id/R.5fc09464dabd5f7e947256b195b0d698?rik=I0%2brEBQPprL6kA&pid=ImgRaw&r=0' , idCombo:0 },
    { id: 8, name: 'Combo 8',description:'1',price:2.66,idCategory:6,img:'https://th.bing.com/th/id/R.5fc09464dabd5f7e947256b195b0d698?rik=I0%2brEBQPprL6kA&pid=ImgRaw&r=0', idCombo:0 }
  
  ];
  constructor() { }
  getProduct(){
    return this.cusProductoArray;//Devuelve todo el arreglo
  }
  getOneCategory(_id: number): EntityProducts[] {
    return this.cusProductoArray.filter(x => x.idCategory === Number(_id));//Devuelve todo el arreglo que coicida con el id de la categoria
  }
  getOneProducto(_id: number): EntityProducts[] {
    return this.cusProductoArray.filter(x => x.id === Number(_id));//Devuelve todo el arreglo que coicida con el id de la categoria
  }
}
