// interface con los siguientes campos:
/*    private  String imagen;
    private  String nombre;
    private  Double precio;
    private  Integer cantidad;
    private  Double total;*/

export interface DetalleVenta {
    id: number;
    imagen: string;
    nombre: string;
    precio: number;
    cantidad: number;
    total: number;
}
