export interface ventaDetalle {

        idVentaDetalle: number | null;
        cantidad: number;
        precioUnitario: number;
        precioTotal: number;
        product: {
          id: number | null;
        };
        platoDTO: {
          id: number | null;
        };
        ventaEntity: {
          idVenta: number | null;
        };
      
      

}
