import { Injectable } from '@angular/core';
import { EntityCategory } from 'src/app/entity/entityCategory';
@Injectable({
  providedIn: 'root'
})
export class CusCategoryService {
entityArray: EntityCategory[]=[
  { id: 1, name: 'Categoría 1',img:'https://th.bing.com/th/id/R.5fc09464dabd5f7e947256b195b0d698?rik=I0%2brEBQPprL6kA&pid=ImgRaw&r=0' },
  { id: 2, name: 'Categoría 2', img:'https://th.bing.com/th/id/R.5fc09464dabd5f7e947256b195b0d698?rik=I0%2brEBQPprL6kA&pid=ImgRaw&r=0'},
  { id: 3, name: 'Categoría 3', img:'https://th.bing.com/th/id/R.5fc09464dabd5f7e947256b195b0d698?rik=I0%2brEBQPprL6kA&pid=ImgRaw&r=0'},
  { id: 4, name: 'Categoría 4', img:'https://th.bing.com/th/id/R.5fc09464dabd5f7e947256b195b0d698?rik=I0%2brEBQPprL6kA&pid=ImgRaw&r=0'},
  { id: 5, name: 'Categoría 5', img:'https://th.bing.com/th/id/R.5fc09464dabd5f7e947256b195b0d698?rik=I0%2brEBQPprL6kA&pid=ImgRaw&r=0'},
  { id: 6, name: 'Categoría 6', img:'https://th.bing.com/th/id/R.5fc09464dabd5f7e947256b195b0d698?rik=I0%2brEBQPprL6kA&pid=ImgRaw&r=0'},
  { id: 7, name: 'Pizza', img:'https://www.pizzahut.com.sv/static/media/images/categorias/webp/1_697_MD_08-03-2023-09-26.webp?2.0.26'},
  { id: 8, name: 'Prueba', img:'https://www.pizzahut.com.sv/static/media/images/categorias/webp/1_697_MD_08-03-2023-09-26.webp?2.0.26'}

]; //Aqui se crea el array
  constructor() { }
  getCategory(){
    return this.entityArray;
  }
  getOneCategory(_id:number){//Extrae solo un registro del array
    return this.entityArray.find(x => x.id === _id);//Seleccionamos un registro
  }

}

