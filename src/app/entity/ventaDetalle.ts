export interface ventaDetalle {

        idVentaDetalle: number | null,
        cantidad: number,
        precioUnitario: number,
        precioTotal: number,
        product: {
          id: number | null,
          urlImagen ?: string,
          nombre ?: string,

        };

        platoDTO: {
          id: number | null,
        };
        ventaEntity: {
          idVenta: number | null,
          nombreEncargado?: string,
          correoEncargado?: string,
          numeroTelefono?: string,

        };      

}
