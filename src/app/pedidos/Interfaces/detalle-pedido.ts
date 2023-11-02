import {PlatoInterface} from "../../interface/plato-interface";
import {ProductoInterface} from "../../interface/producto-interface";

export interface DetallePedido {


  id: number;
  nombreEncargado: string;
  correoEncargado: string;
  numeroTelefono: string;
  otrasIndicaciones: string;
  total: number;
  Latitud: number;
  longitud: number;
  estado: string;
  producto ? : ProductoInterface ;
  plato ? : PlatoInterface;
}
