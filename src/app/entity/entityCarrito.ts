import { EntityProducts } from "./entityProducts";

export class EntityCarrito {
  private _id: number = 0;
  private _idProducto: EntityProducts | null = null;
  private _cantidad: number = 0;

  // Getter para el atributo id
  get id(): number {
    return this._id;
  }

  // Setter para el atributo id
  set id(value: number) {
    this._id = value;
  }

  // Getter para el atributo idProducto
  get idProducto(): EntityProducts | null {
    return this._idProducto;
  }

  // Setter para el atributo idProducto
  set idProducto(value: EntityProducts | null) {
    this._idProducto = value;
  }

  // Getter para el atributo cantidad
  get cantidad(): number {
    return this._cantidad;
  }

  // Setter para el atributo cantidad
  set cantidad(value: number) {
    this._cantidad = value;
  }
}
