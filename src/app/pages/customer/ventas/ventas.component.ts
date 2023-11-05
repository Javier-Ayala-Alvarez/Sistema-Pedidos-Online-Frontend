import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { entityVenta } from 'src/app/entity/entityVenta';
import { LoginService } from 'src/app/services/login/login.service';
import { RealizarVentaService } from 'src/app/services/realizarVenta/realizar-venta.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit{
  user:any=null;

  ngOnInit(): void {
    this.user=this.loginService.getUser();
    this.terminoBusqueda = this.user.id;
    console.log(this.user);
    this.realizarBusqueda();

    }
    
  constructor(private servicio: RealizarVentaService,
    private router: Router,private loginService:LoginService) { }
  array: entityVenta[] | undefined;
  page: number = 0;
  size = 10;
  order = 'id_venta';
  asc = true;
  isFirst = false;
  isLast = false;
  terminoBusqueda: string = "";
  totalPages: any = [];

  paginaSiguiente(): void {
    if (!this.isLast) {
      this.page++;
      this.ngOnInit();
    }
  }
  paginaAnterior(): void {
    if (!this.isFirst) {
      this.page--;
      this.ngOnInit();
    }
  }

  realizarBusqueda() {
    this.servicio.listarPorNombrePagina(this.terminoBusqueda, this.page, this.size, this.order, this.asc).subscribe(
      (dato: any) => {
        // Itera a través de los elementos en dato.content
        dato.content.forEach((elemento: any) => {
          // Asigna el estado correcto según el valor actual
          if (elemento.estado === 'p') {
            elemento.estado = 'pedido';
          } else if (elemento.estado === 'c') {
            elemento.estado = 'preparando';
          } else if (elemento.estado === 'd') {
            elemento.estado = 'despachado';
          } else if (elemento.estado === 'e') {
            elemento.estado = 'entregado';
          }
        });
  
        this.array = dato.content;
        this.isFirst = dato.first;
        this.isLast = dato.last;
        this.totalPages = new Array(dato['totalPages']);
      },
      (error) => {
        console.log(error);
        Swal.fire('Error !!', 'Error al cargar las Compras', 'error');
      }
    );
  }
  

}
