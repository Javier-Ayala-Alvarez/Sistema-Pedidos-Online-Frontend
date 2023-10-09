import {Component, OnInit, Inject, AfterViewInit, ViewChild} from '@angular/core';
import { CusCardsService } from '../services/cusCards/cus-cards.service';
import { EntityCarrito } from '../entity/entityCarrito';
import Swal from 'sweetalert2';
import { CustomersService } from '../services/customers/customers.service';
import { RealizarVentaService } from '../services/realizarVenta/realizar-venta.service';
import { ventaDetalle } from '../entity/ventaDetalle';
import { LoginService } from '../services/login/login.service';
import { Router } from '@angular/router';
import {MapViewComponent} from "../maps/Componets/map-view/map-view.component";

@Component({
  selector: 'app-cus-datos-generales',
  templateUrl: './cus-datos-generales.component.html',
  styleUrls: ['./cus-datos-generales.component.css']
})
export class CusDatosGeneralesComponent implements OnInit, AfterViewInit {

  @ViewChild(MapViewComponent) map!: MapViewComponent;
  arrayCards: EntityCarrito[] = [];
  arrayVentaDetalle: ventaDetalle[] = [];
  total: number = 0;
  idVenta : number = 0;
  cargar: any = {};
  newVenta = {//Agregamos este objeto
    idVenta: null,
    nombreEncargado: '',
    correoEncargado: '',
    numeroTelefono: '',
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


  constructor(private customersService: CustomersService,
    public servicesCard: CusCardsService, private realizarVenta: RealizarVentaService, private loginService:LoginService,private router:Router) {

  }

  ngOnInit(): void {
    this.arrayCards = this.servicesCard.arryProductCars;
    this.calculateTotal();
    this.customersService.listarCustomer(this.customersService.getUserId()).subscribe(
      (data) => {
        this.cargar = data;
        this.newVenta.nombreEncargado = this.cargar.nombre;
        this.newVenta.correoEncargado = this.cargar.correo;
        console.log(this.cargar);
      },
      (error) => {
        console.log(error);
        Swal.fire('Error !!', '', 'error');
      }

    )

    this.loginService.getCurrentUser().subscribe((user:any)=>{
      this.newVenta.usuarioDTO.id =  user.id;
    })
  }
  calculateTotal(): void {
    this.total = this.arrayCards.reduce((sum, car) => sum + (car.cantidad * (car.idProducto?.precioVenta || 0)), 0);
  }



  addVenta() {
    if (this.map.idSucursal == 0) {
      Swal.fire('Error', 'No existe una sucursal cercana a su ubicación.', 'error');
      return;
    }

    if (this.map.coordenadas == null) {
      Swal.fire('Error', 'No se pudo obtener su ubicación.', 'error');
      return;
    }

    this.newVenta.sucursal.id = this.map.idSucursal.toString();
    this.newVenta.total = this.total;
    this.newVenta.altitud = this.map.coordenadas[1];
    this.newVenta.longitud = this.map.coordenadas[0];
    console.log("ArrayVenta",this.newVenta);

    this.realizarVenta.guardarVenta(this.newVenta).subscribe(
      (dato: any) => {
        this.newVenta = {
          idVenta: null,
          nombreEncargado: '',
          correoEncargado: '',
          numeroTelefono: '',
          otrasIndicaciones: '',
          total: 0,  // Reinicializado como número
          usuarioDTO: {
            id: ''
          },
          sucursal: {
            id: ''
          },
          altitud: 0,
          longitud: 0,
        }
        this.idVenta = dato.idVenta;
        this.tranformarArray();
        console.log("ArrayDetalle",this.arrayVentaDetalle);
        this.guardarDetalle();
        this.arrayVentaDetalle = [];
        this.arrayCards = [];

      },
      (error: any) => {
        // Captura y muestra el mensaje de error de la API al usuario
        if (error.error && error.error.message) {
          Swal.fire('Error', error.error.message, 'error');
        } else {
          Swal.fire('Error', 'Ocurrió un error al crear la compra', 'error');
        }
      }
    )
  }


tranformarArray(){
  this.arrayVentaDetalle = [];
for (let i = 0; i < this.arrayCards.length; i++) {

  const product = this.arrayCards[i].idProducto?.idProducto || null;
  const ventaDetalle: ventaDetalle = {
    idVentaDetalle: 0,
    cantidad: this.arrayCards[i].cantidad || 0,
    precioUnitario: this.arrayCards[i].idProducto?.precioVenta || 0,
    precioTotal: ((this.arrayCards[i].idProducto?.precioVenta || 0) * (this.arrayCards[i].cantidad || 0)),
    product: { id: product },
    platoDTO: { id: this.arrayCards[i].idProducto?.idCombo || null },
    ventaEntity: { idVenta: this.idVenta || null }
  };


  this.arrayVentaDetalle.push(ventaDetalle);
}

}

  guardarDetalle() {
    this.realizarVenta.guardarDetalle(this.arrayVentaDetalle).subscribe(
      (dato: any) => {
        this.servicesCard.eliminarTodo();
        Swal.fire('Compra creada', 'Compra creada con éxito', 'success');
        this.router.navigate(['customer-dashboard/Category']);
        this.loginService.loginStatusSubjec.next(true);
      },
      (error: any) => {
        // Captura y muestra el mensaje de error de la API al usuario
        if (error.error && error.error.message) {
          Swal.fire('Error', error.error.message, 'error');
        } else {
          Swal.fire('Error', 'Ocurrió un error al crear la compra', 'error');
        }
      }
    )

  }


  cancelarCompra() {
    Swal.fire({
      title: 'Eliminar producto',
      text: '¿Estás seguro , quieres eliminar este el Pedido?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar'
    }).then((resultado) => {
      if (resultado.isConfirmed) {
        this.servicesCard.eliminarTodo();
        this.newVenta = {
          idVenta: null,
          nombreEncargado: '',
          correoEncargado: '',
          numeroTelefono: '',
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
        this.arrayCards = this.servicesCard.arryProductCars;

        Swal.fire('Producto eliminada', 'El pedido ha sido eliminado de la base de datos', 'success');
        this.ngOnInit();


      }
    })
  }

  ngAfterViewInit(): void {





  }

}
