export class Plato {

  id?: number;
  nombre?: string;
  descripcion?: string;
  urlImagen?: string;
  listaProductos?: number[];
  idCategoria?: number;
  idPromocion?: number;
  precio?: number;


    constructor(nombre: string, descripcion: string, urlImagen: string, listaProductos: number[], idCategoria: number, idPromocion: number, precio: number) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.urlImagen = urlImagen;
        this.listaProductos = listaProductos;
        this.idCategoria = idCategoria;
        this.idPromocion = idPromocion;
        this.precio = precio;
    }


}
