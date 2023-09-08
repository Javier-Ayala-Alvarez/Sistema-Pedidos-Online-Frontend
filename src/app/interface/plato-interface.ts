import {PromocionInterface} from "./promocion-interface";
import {ProductoInterface} from "./producto-interface";
import {CategoriaInterface} from "./categoria-interface";

export interface PlatoInterface {

  id: number;
  nombre: string;
  descripcion: string;
  estado: boolean;
  precio: number;
  urlImagen: string;
  categoria: CategoriaInterface;
  productos: ProductoInterface[] ;
  promocion: PromocionInterface;



}
