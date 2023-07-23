import { EntityCategory } from "./entityCategory";

export class EntityProducts{
    id: number =0;
    nombre!: string;
    descripcion!: string;
    estado !:boolean;
    precioVenta!:number;
    ganancia!:number;
    urlImagen!:string;
    category: EntityCategory | null = null;
    evento!:number;
    promocion!:number;
    idCombo: number =0;
}