export interface entityVenta {
    idVenta: null,
    nombreEncargado: '',
    correoEncargado: '',
    numeroTelefono: '',
    estado: '',
    fecha: Date,

    otrasIndicaciones: '',
    total: 0.00,
    usuarioDTO: {
      id: ''
    },
    sucursal: {
      id: '',
    },
    altitud: 0,
    longitud: 0,
  }